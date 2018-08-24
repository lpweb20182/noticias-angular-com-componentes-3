import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NoticiasRecentesComponent } from './noticias-recentes/noticias-recentes.component';
import { CadastrarNoticiaComponent } from './cadastrar-noticia/cadastrar-noticia.component';
import { HomeComponent } from './home/home.component';
import { NoticiaRecenteComponent } from './noticia-recente/noticia-recente.component';
import { TodasNoticiasComponent } from './todas-noticias/todas-noticias.component';
import { TudoComponent } from './tudo/tudo.component';

@NgModule({
  declarations: [
    AppComponent,
    NoticiasRecentesComponent,
    CadastrarNoticiaComponent,
    HomeComponent,
    NoticiaRecenteComponent,
    TodasNoticiasComponent,
    TudoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
