import { Component, OnInit } from '@angular/core';

import { Observable, Subject, fromEventPattern } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  switchMap
} from 'rxjs/operators';

import { PokedexService } from '../../../shared/services/pokedex.service';
import { Pokemon } from '../../../shared/models/pokemon';

@Component({
  selector: 'app-pokesearch',
  templateUrl: './pokesearch.component.html',
  styleUrls: ['./pokesearch.component.sass']
})
export class PokesearchComponent implements OnInit {

  pokemons$: Observable<Pokemon[]>
  private searchTerms = new Subject<string>();
  searchValue: string;

  constructor(private pokedexService: PokedexService) { }

  searchPokemon(term: string) {
    this.searchTerms.next(term);
  }

  ngOnInit() {
    this.pokemons$ = this.searchTerms.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      switchMap((term: string) => this.pokedexService.searchPokemon(term)),
    );
  }

}
