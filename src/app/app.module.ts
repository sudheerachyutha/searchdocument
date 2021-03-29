import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { StickyMenuComponent } from './sticky-menu/sticky-menu.component';
import { DocumentViewsComponent } from './document-views/document-views.component';
import { MobileViewComponent } from './mobile-view/mobile-view.component';
import { DesktopViewComponent } from './desktop-view/desktop-view.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    StickyMenuComponent,
    DocumentViewsComponent,
    MobileViewComponent,
    DesktopViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
