import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from 'src/app/models/pokemon.model';
import { PokemonsService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent {
  @Input() pokemonName: string = "";
  pokemon: any;

  constructor(private router: Router, private pokemonsService: PokemonsService) {}

  ngOnInit() {
    this.pokemonsService.getPokemon(this.pokemonName).subscribe((result: Pokemon) => this.pokemon = result); 
  }

seeDetails(pokemon: any){
  this.router.navigate(['/main/pokemons/detail'], {state: {pokemon}});
}
}
