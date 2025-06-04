import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Item {
  id: number;
  title: string;
}

@Injectable({ providedIn: 'root' })
export class ItemService {
  private originalItems: Item[] = [];
  private readonly itemsSubject = new BehaviorSubject<Item[]>([]);
  readonly items$ = this.itemsSubject.asObservable();

  async fetchItems(): Promise<void> {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
    const data: Item[] = await res.json();
    this.originalItems = data;
    this.itemsSubject.next(data);
  }

  filterItems(term: string) {
    if (!term) {
      this.itemsSubject.next(this.originalItems);
      return;
    }
    const filtered = this.originalItems.filter(i => i.title.includes(term));
    this.itemsSubject.next(filtered);
  }
}
