import {Directive, effect, inject, input, TemplateRef, viewChild, ViewContainerRef} from '@angular/core';
import {Permission} from "./auth.model";
import {AuthService} from "./auth.service";

@Directive({
  selector: '[appAuth]',
  standalone: true,

})
export class AuthDirective {
  userType = input.required<Permission>({alias: 'appAuth'});
  // getting html inside the ng template
  private templateRef = inject(TemplateRef);
  private viewContainerRef = inject(ViewContainerRef);
  constructor(private authService: AuthService) {
    effect(() => {
      if(this.authService.activePermission() === this.userType()){
        console.log("show element");
        // this will render the templateRef content
        this.viewContainerRef.createEmbeddedView(this.templateRef);
      }else {
        console.log("do not show element")
      }
    });
  }

}
