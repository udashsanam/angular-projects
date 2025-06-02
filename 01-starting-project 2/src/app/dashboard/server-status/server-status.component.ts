import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit,AfterViewInit, OnDestroy{
  currentStatus: 'online' | 'offline' | 'unknown' = 'offline';

  private interval?: ReturnType<typeof setTimeout>;

  constructor() {
  }

  ngOnDestroy(): void {
      clearTimeout(this.interval);
    }

  ngAfterViewInit(): void {

    console.log('after view init');
    }

  ngOnInit() {
    console.log('ng init');
     this.interval =setInterval(() => {
      const rnd = Math.random();
      if(rnd > 0.5) {
        this.currentStatus = 'online';
      } else if(rnd > 0.25) {
        this.currentStatus = 'offline';
      }else {
        this.currentStatus = 'unknown';
      }
      console.log(
        `Server status changed to ${this.currentStatus}`
      )
    }, 5000);
  }


}
