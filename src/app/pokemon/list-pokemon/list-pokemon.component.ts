import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { POKEMONS } from '../mock-pokemon-list';
import { Router } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
})
export class ListPokemonComponent implements OnInit{
  pokemenList : Pokemon[];

  constructor(private router : Router,private pokemonService : PokemonService){}
  
  ngOnInit(): void {
    this.pokemenList = this.pokemonService.getPokemonList();
  }

  
  allerADetail(pokem : Pokemon){
    this.router.navigate(['/pokemons',pokem.id])
  }
}
