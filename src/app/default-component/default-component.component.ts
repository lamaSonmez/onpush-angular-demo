import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-default-component',
  templateUrl: './default-component.component.html',
  styleUrls: ['./default-component.component.scss']
})
export class DefaultComponent {
  @Input() counter!: number;
  @Input() data!: { value: number };
  @Input() items!: number[];
  @Input() map!: Map<string, number>;
  changeDetectionCount = 0;

  ngDoCheck() {
    this.changeDetectionCount++;
  }
}
