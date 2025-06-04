import {
  Component,
  Input,
  AfterViewInit,
  OnDestroy,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { delay } from '../utils/delay';
import { ReactLoader } from '../utils/react-loader';

@Component({
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      Angular Wrapper Component around React Component
      <div *ngIf="isLoading" class="skeleton">Loading skeleton...</div>
      <div #reactRoot></div>
    </div>
  `,
})
export class WrapperComponent implements AfterViewInit, OnDestroy {
  @Input() title = 'Default Title from My Host Angularr';
  @Input() someOtherData: any = { name: 'Daisy', age: 20 };
  @Input() onClickHandler?: () => void = () => {
    console.log('Default Angular click handler triggered.');
  };

  @ViewChild('reactRoot', { static: false }) containerRef!: ElementRef;

  constructor(private reactLoader: ReactLoader) {}

  isLoading = true;

  async ngAfterViewInit() {
    await delay(1000);
    if (!this.containerRef) return;

    const propsFromAngular = {
      title: this.title,
      userData: this.someOtherData,
      onClick: this.onClickHandler,
    };
    const module = await import('carter/Module');

    await this.reactLoader.mount({
      container: this.containerRef.nativeElement,
      module,
      props: propsFromAngular,
    });

    console.log('React component mounted with props:', propsFromAngular);

    this.isLoading = false;
  }

  ngOnDestroy() {
    this.reactLoader.unmount();
  }
}
