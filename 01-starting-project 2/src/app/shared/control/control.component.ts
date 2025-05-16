import {
  AfterViewInit,
  Component, contentChild,
  ContentChild,
  ElementRef,
  HostBinding,
  HostListener,
  inject,
  Input, OnInit,
  ViewEncapsulation
} from '@angular/core';

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
export class ControlComponent implements AfterViewInit, OnInit{
  @Input() label!: string;

  // @HostBinding('class') className ='control';
  // @HostListener('click')  onClick() {
  //   console.log('clicked');
  // }
  private el = inject(ElementRef);

  // @ContentChild('input') private control ?: ElementRef<HTMLInputElement | HTMLTextAreaElement>;
  private control = contentChild.required<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');
  constructor() { }

  ngOnInit(): void {
    console.log('ng init');
    console.log(this.control());
    }

  ngAfterViewInit(): void {
    console.log('after view init');
    console.log(this.control());
    }

   onclick() {
    // console.log('clicked');
    // console.log(this.el);
    console.log(this.control());
   }
}
