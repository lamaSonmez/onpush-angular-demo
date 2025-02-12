import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { OnPushComponent } from './on-push-component/on-push-component.component';
import { DefaultComponent } from './default-component/default-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    OnPushComponent,
    DefaultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
