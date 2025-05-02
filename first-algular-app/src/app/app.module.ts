import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {UserComponent} from './user/user.component';
import {TasksComponent} from './tasks/tasks.component';
import {BrowserModule} from '@angular/platform-browser';

// bootstrap: which is the root component
@NgModule({
  declarations: [AppComponent],
  imports: [
    HeaderComponent,
    UserComponent,
    TasksComponent,
    BrowserModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
