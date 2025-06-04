import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {ApiItem} from '@global-types/shared-types';


@Injectable({ providedIn: 'root' })
export class ItemService {
  private originalItems: ApiItem[] = [];
  private readonly itemsSubject = new BehaviorSubject<ApiItem[]>([]);
  readonly items$ = this.itemsSubject.asObservable();

  private page = 1;
  private readonly limit = 5;

  async fetchItems(): Promise<void> {
    const res = await fetch(`https://jsonplaceholder.typicode.com/comments?_page=${this.page}&_limit=${this.limit}`);
    const data: ApiItem[] = await res.json();
    this.originalItems = data;
    this.itemsSubject.next(data);
  }

  async nextPage(): Promise<void> {
    console.log('Next page requested:', this.page);
    this.page++;
    await this.fetchItems();
  }

  async prevPage(): Promise<void> {
    console.log('Previous page requested:', this.page);
    if (this.page > 1) {
      this.page--;
      await this.fetchItems();
    }
  }

  filterItems(term: string) {
    if (!term) {
      this.itemsSubject.next(this.originalItems);
      return;
    }
    const filtered = this.originalItems.filter(i => i.email?.toLowerCase().includes(term?.toLowerCase()));
    this.itemsSubject.next(filtered);
  }
}
