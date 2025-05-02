import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {UserComponent} from './user/user.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {SharedModule} from './shared/shared.mocule';
import {TasksModule} from './tasks/tasks.module';

// bootstrap: which is the root component
@NgModule({
  declarations: [AppComponent,HeaderComponent, UserComponent],
  imports: [
    BrowserModule,
    FormsModule, SharedModule,
  TasksModule],
  bootstrap: [AppComponent]
})
export class AppModule {
}
