import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemon-list';

@Injectable()
export class PokemonService {

  constructor() { }

  getPokemonList(): Pokemon[]{
    return POKEMONS;
  }

  getPokemonById(id : number) : Pokemon|undefined{
    return POKEMONS.find(p => p.id == id);
  }

  getPokemonListType(): string[]{
    return [
      'Feu','Insecte','Eau','Electrik','Normal'
    ]
  }
}
