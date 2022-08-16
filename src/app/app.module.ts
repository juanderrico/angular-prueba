import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaComponent } from './components/lista/lista.component';
import { HeaderComponent } from './components/header/header.component';
import { APIRestShowComponent } from './components/apirest-show/apirest-show.component';
import { ContentBarComponent } from './components/content-bar/content-bar.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ShowProductComponent } from './components/show-product/show-product.component';


@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    HeaderComponent,
    APIRestShowComponent,
    ContentBarComponent,
    ProductDetailComponent,
    ShowProductComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
