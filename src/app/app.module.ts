import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

//impotamos app.module de la carpeta pokemon
import { PokemonModule } from './pokemon/pokemon.module';
import { ComponentsModule } from './components/components.module';
//import { PokemonlistComponent } from './pokemon/pokemonlist/pokemonlist.component';



@NgModule({
  declarations: [
    AppComponent,
    //ComponentsModule
    //PokemonlistComponent
  ],
  imports: [
    BrowserModule,
    //para hacer penicione http pero tambien hay que importar el metodo
    HttpClientModule,
    PokemonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
