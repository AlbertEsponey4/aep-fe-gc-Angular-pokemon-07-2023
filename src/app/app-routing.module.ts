import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { MainComponent } from './main/main.component';
import { PokemonComponent } from './pokemons/pokemon/pokemon.component';
import { PokemonDetailComponent } from './pokemons/pokemon-detail/pokemon-detail.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PokemonListComponent } from './pokemons/pokemon-list/pokemon-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'main',
    component:MainComponent,
    children: [
      {
        path:'home',
        component:HomeComponent
      },
      {
        path:'pokemons',
        component:PokemonListComponent,
      },
      {
        path:'pokemons/detail',
        component:PokemonDetailComponent
      },
      {
        path:'about',
        component:AboutComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
