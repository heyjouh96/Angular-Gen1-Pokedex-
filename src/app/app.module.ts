import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokedexComponent } from './components/pokedex/pokedex.component';
import { PokesearchComponent } from './components/pokesearch/pokesearch.component';
import { PokedetailsComponent } from './components/pokedetails/pokedetails.component';

@NgModule({
  declarations: [
    AppComponent,
    PokedexComponent,
    PokesearchComponent,
    PokedetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
