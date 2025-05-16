import {Component, HostBinding, HostListener, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)':'onclick()'
  }
})
export class ControlComponent {
  @Input() label!: string;

  // @HostBinding('class') className ='control';
  // @HostListener('click')  onClick() {
  //   console.log('clicked');
  // }

   onclick() {
    console.log('clicked');
   }
}
