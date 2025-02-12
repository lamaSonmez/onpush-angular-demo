import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-on-push-component',
  templateUrl: './on-push-component.component.html',
  styleUrls: ['./on-push-component.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnPushComponent {
  @Input() counter!: number;
  @Input() data!: { value: number };
  @Input() items!: number[];
  @Input() map!: Map<string, number>;
  changeDetectionCount = 0;

  ngDoCheck() {
    this.changeDetectionCount++;
  }
}
