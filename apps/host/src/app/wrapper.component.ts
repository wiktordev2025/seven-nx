import {
  Component,
  AfterViewInit,
  OnDestroy,
  ViewChild,
  ElementRef,
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
    <div class="wrapper">
      <input
        [(ngModel)]="filterTerm"
        (input)="onFilter()"
        placeholder="Angular local filter..."
        class="filter-input"
      />
      <div #reactRoot class="react-root"></div>
    </div>
  `,
  styleUrls: ['./wrapper.component.css'],
})
export class WrapperComponent implements AfterViewInit, OnDestroy {
  filterTerm = '';
  title = 'Host Angular title';

  @ViewChild('reactRoot', { static: false }) containerRef!: ElementRef;

  constructor(
    private reactLoader: ReactLoader,
    private itemService: ItemService
  ) {}

  private sub?: Subscription;

  async ngAfterViewInit() {
    const container = this.containerRef.nativeElement;
    const reactModule = await import('carter/Module');
    await this.itemService.fetchItems();

    const propsFromAngular = {
      title: this.title,
      onNext: () => this.itemService.nextPage(),
      onPrev: () => this.itemService.prevPage(),
    };

    this.sub = this.itemService.items$.subscribe(items => {
      console.log('Angular items received:', items);

      this.reactLoader.mount({
        container,
        module: reactModule,
        props: { ...propsFromAngular, items },
      });
    });
  }

  onFilter() {
    this.itemService.filterItems(this.filterTerm);
  }

  ngOnDestroy() {
    const container = this.containerRef.nativeElement;
    this.sub?.unsubscribe();
    this.reactLoader.unmount(container);
  }
}
