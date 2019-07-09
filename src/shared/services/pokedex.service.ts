import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Pokemon } from '../models/pokemon';
import { POKEDEX } from '../mocks/pokedex';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  constructor() { }

  searchPokemon(term: string) {
    if (!term.trim()) return of([]);

    const newTerm = term.toLowerCase();
    const pokemons = POKEDEX.filter(pokemon => pokemon.name.english.toLowerCase().includes(newTerm));
    return of(pokemons);
  }
}
