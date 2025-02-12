import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
  counter = 0;
  data = { value: 0 };
  items = [1, 2, 3];
  map = new Map<string, number>();

  constructor() {
    this.map.set('key1', 1);
    this.map.set('key2', 2);
  }

  incrementPrimitive() {
    this.counter++; // ✅ Will trigger change detection in both components
  }

  incrementObject() {
    this.data.value++; // 🚫 OnPush component won't detect the change
  }

  changeObjectReference() {
    this.data = { ...this.data, value: this.data.value + 1 }; // ✅ OnPush will detect
  }

  addItem() {
    this.items.push(this.items.length + 1); // 🚫 Won't trigger OnPush
  }

  changeArrayReference() {
    this.items = [...this.items, this.items.length + 1]; // ✅ OnPush will detect
  }

  modifyMap() {
    this.map.set('key1', this.map.get('key1')! + 1); // 🚫 OnPush won't detect this
  }

  changeMapReference() {
    this.map = new Map(this.map); // ✅ OnPush will detect this
    this.map.set('key1', this.map.get('key1')! + 1);
  }
}
