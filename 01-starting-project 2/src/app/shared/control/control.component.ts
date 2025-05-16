import {Component, ElementRef, HostBinding, HostListener, inject, Input, ViewEncapsulation} from '@angular/core';

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
  private el = inject(ElementRef);
  constructor() { }

   onclick() {
    console.log('clicked');
    console.log(this.el);
   }
}
