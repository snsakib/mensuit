import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { HeroImageComponent } from "./hero-image/hero-image.component";
import { OffersComponent } from "./offers/offers.component";
import { ProductsComponent } from "./products/products.component";
import { FooterComponent } from "./footer/footer.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    HeroImageComponent,
    OffersComponent,
    ProductsComponent,
    FooterComponent
  ],
  imports: [BrowserModule, BsDropdownModule.forRoot()],
  exports: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
