import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-rect',
  standalone: true,
  imports: [],
  templateUrl: './rect.component.html',
  styleUrl: './rect.component.css',
})
export class RectComponent {
  // Todo: Implement custom two-way binding
  // input should hav size and output should have sizeSize i.e <inputname> and <inputname>Change
  // use as this way
  //<app-rect [(size)]="rectSize" />
  @Input({required:true}) size !: {width: string, height: string};
  @Output() sizeChange = new EventEmitter<{width: string, height: string}>();

  onReset() {
    this.sizeChange.emit({width: '100', height: '100'});
  }
}
