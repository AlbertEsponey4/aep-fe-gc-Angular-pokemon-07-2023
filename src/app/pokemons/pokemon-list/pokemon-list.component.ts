import { Component } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { PokemonsService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent {
  pokemons: Pokemon[] = [];

  constructor(private pokemonsService: PokemonsService) {}

  ngOnInit() {
    this.pokemonsService.getPokemons().subscribe((result: Pokemon[]) => this.pokemons = result); 
  }
}
