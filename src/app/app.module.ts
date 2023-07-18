import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AuthModule } from './auth/auth.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './utils/nav-bar/nav-bar.component';
import { MainComponent } from './main/main.component';
import { PokemonListComponent } from './pokemons/pokemon-list/pokemon-list.component';
import { PokemonComponent } from './pokemons/pokemon/pokemon.component';
import { PokemonDetailComponent } from './pokemons/pokemon-detail/pokemon-detail.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MainComponent,
    PokemonListComponent,
    PokemonComponent,
    PokemonDetailComponent,
    AboutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
