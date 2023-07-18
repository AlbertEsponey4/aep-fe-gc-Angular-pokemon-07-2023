import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from '../models/pokemon.model';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  constructor(private http: HttpClient) { }

  getPokemons(): Observable<Pokemon[]> {
    return this.http.get<any>("https://pokeapi.co/api/v2/pokemon").pipe(
      map(response => {
        return response.results.map((result: any) => {
          return {
            name: result.name,
            height: 0,
            weight: 0,
            image: {
              front: '',
              back: ''
            },
            ability: '' 
          };
        });
      })
    );
  }

  getPokemon(name: string): Observable<Pokemon> {
    return this.http.get<any>("https://pokeapi.co/api/v2/pokemon/" + name).pipe(
      map(response => {
        return {
          name: response.name,
          height: response.height,
          weight: response.weight,
          image: {
            front: response.sprites.front_default,
            back: response.sprites.back_default
          },
          ability: response.abilities[0]?.ability.name
        };
      })
    );
  }
}
