import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RecomendacaoInserirComponent } from './recomendacao-inserir/recomendacao-inserir.component';
import { RecomendacaoListarComponent } from './recomendacao-listar/recomendacao-listar.component';

@NgModule({
  declarations: [
    AppComponent,
    RecomendacaoInserirComponent,
    RecomendacaoListarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
