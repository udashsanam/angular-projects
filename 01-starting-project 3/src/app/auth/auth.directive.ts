import {Directive, effect, input} from '@angular/core';
import {Permission} from "./auth.model";
import {AuthService} from "./auth.service";

@Directive({
  selector: '[appAuth]',
  standalone: true
})
export class AuthDirective {
  userType = input.required<Permission>({alias: 'appAuth'});
  constructor(private authService: AuthService) {
    effect(() => {
      if(this.authService.activePermission() === this.userType()){
        console.log("show element")
      }else {
        console.log("do not show element")
      }
    });
  }

}
