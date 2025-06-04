import {
  Component,
  AfterViewInit,
  OnDestroy,
  ViewChild,
  ElementRef, Input,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemService } from '../services/item.service';
import { ReactLoader } from '../utils/react-loader';
import { Subscription } from 'rxjs';
import {FormsModule} from '@angular/forms';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div>
      <input [(ngModel)]="filterTerm" (input)="onFilter()" placeholder="Angular Filter..." />
      <div #reactRoot></div>
    </div>
  `,
})
export class WrapperComponent implements AfterViewInit, OnDestroy {
  filterTerm = '';
  title = 'Default Title from My Host Angularr';
  someOtherData: any = { name: 'Daisy', age: 20 };
  onClickHandler?: () => void = () => {
    console.log('Default Angular click handler triggered.');
  };

  @ViewChild('reactRoot', { static: false }) containerRef!: ElementRef;

  constructor(
    private reactLoader: ReactLoader,
    private itemService: ItemService
  ) {}

  private sub?: Subscription;
  private mod?: any;

  async ngAfterViewInit() {
    const container = this.containerRef.nativeElement;
    this.mod = await import('carter/Module');
    await this.itemService.fetchItems();

    const propsFromAngular = {
      title: this.title,
      userData: this.someOtherData,
      onClick: this.onClickHandler,
    };

    this.sub = this.itemService.items$.subscribe(items => {
      console.log('Items received:', items);
      this.reactLoader.mount({
        container,
        module: this.mod,
        props: { ...propsFromAngular, items },
      });
    });
  }

  onFilter() {
    this.itemService.filterItems(this.filterTerm);
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
    this.reactLoader.unmount();
  }
}
