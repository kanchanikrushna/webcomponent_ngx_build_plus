import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  entryComponents: [AppComponent]
})
export class AppModule { 
  /**
   *
   */
  constructor(private injector: Injector) {
    const headerApp = createCustomElement(AppComponent, {injector});
    customElements.define('side-app', headerApp);
  }
  ngDoBootstrap(){
     

  }
}
