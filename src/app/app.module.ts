import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserPageComponent } from './component/user-page/user-page.component';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { UserUpdateComponent } from './component/user-update/user-update.component';

@NgModule({
  declarations: [
    AppComponent,
    UserPageComponent,
    UserUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
