import {Directive, ElementRef, inject, input} from "@angular/core";

@Directive({
  selector: 'a[appSafeLink]',
  standalone:true,
  // defining action for directive
  host:{
    '(click)':'onConfirmLeavePage($event)',
  },
})
export class SafeLinkDirective{

   queryParam = input('myapp', {alias: 'appSafeLink'});
   private hostElementRef = inject<ElementRef<HTMLAnchorElement>>(ElementRef);

  constructor() {
    console.log('Safe link dierective is active!');
  }

  onConfirmLeavePage(event: MouseEvent){
    console.log('hello')
    const wantsToLeave = window.confirm('Do you want to leave the app?');
    if(wantsToLeave){
      // const address = (event.target as HTMLAnchorElement).href;
      const address = this.hostElementRef.nativeElement.href;
      (event.target as HTMLAnchorElement).href = address + '?from='+this.queryParam();
      return;
    }
    event.preventDefault();
  }
}
