import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CoepianComponent } from './coepian/coepian.component';
import { GuestComponent } from './guest/guest.component';
import { AdminComponent } from './admin/admin.component';
import { LocateComponent } from './locate/locate.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MenuComponent,
    FooterComponent,
    CarouselComponent,
    CoepianComponent,
    GuestComponent,
    AdminComponent,
    LocateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
