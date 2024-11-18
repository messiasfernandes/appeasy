import { CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MemuComponent } from './shared/memu/memu.component';
import { PrimengModule } from './shared/primeng/primeng.module';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { ProdutolistaComponent } from './pages/produto/produtolista/produtolista.component';
import { MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { ProdutoService } from './services/produto.service';

registerLocaleData(localePt, 'pt-BR');
@NgModule({
  declarations: [
    AppComponent,
    MemuComponent,
    ProdutolistaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrimengModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [ { provide: LOCALE_ID, useValue: 'pt-BR' }, HttpClientModule, MessageService, DialogService, ProdutoService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
