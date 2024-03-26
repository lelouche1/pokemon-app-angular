import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { POKEMONS } from '../mock-pokemon-list';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-details-pokemon',
  templateUrl: './details-pokemon.component.html',
})
export class DetailsPokemonComponent {

  pokemon : Pokemon | undefined;

  constructor (private route : ActivatedRoute ,
     private router : Router,
     private pokemonservice : PokemonService ){}

  ngOnInit() {
    const pokemonId : string | null = this.route.snapshot.paramMap.get('id');

    if(pokemonId){
      this.pokemon = this.pokemonservice.getPokemonById(+pokemonId);
    }
  }
 
  goToPomenList(){
    this.router.navigate(['/pokemons']);
  }

  gotoEditPokemon(poke : Pokemon){
    this.router.navigate(['edit/pokemons/', poke.id])
  }
 
}
