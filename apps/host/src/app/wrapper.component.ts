import {
  Component,
  Input,
  AfterViewInit,
  OnDestroy,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { loadRemoteModule } from '@angular-architects/module-federation';
import * as React from 'react';
import { createRoot, Root } from 'react-dom/client';

@Component({
  template: `
    <div>
      Angular Wrapper Component
      <div #reactRoot></div>
    </div>
  `,
})
export class WrapperComponent implements AfterViewInit, OnDestroy {
  @Input() title = 'Default Title from My Host Angular';
  @Input() someOtherData: any = { name: 'Daisy', age: 20 };

  @ViewChild('reactRoot', { static: true }) containerRef!: ElementRef;
  private root!: Root;

  async ngAfterViewInit() {
    this.root = createRoot(this.containerRef.nativeElement);
    this.root.render('Loading React Component...');

    try {
      const module = await loadRemoteModule({
        remoteEntry: 'http://localhost:4202/remoteEntry.js',
        remoteName: 'reactList',
        exposedModule: './ReactApp',
      });

      const propsFromAngular = {
        title: this.title,
        userData: this.someOtherData,
      };

      this.root.render(
        React.createElement(module.default, propsFromAngular)
      );
    } catch (err) {
      console.error('Failed to load React component:', err);
      this.root.render('Error loading remote component.');
    }
  }

  ngOnDestroy() {
    this.root?.unmount();
  }
}


