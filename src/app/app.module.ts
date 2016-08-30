import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
/*
import { RedirectToSocialComponent }  from './redirect-to-social.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ RedirectToSocialComponent ],
  bootstrap:    [ RedirectToSocialComponent ]
})
export class AppModule { }
*/
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
