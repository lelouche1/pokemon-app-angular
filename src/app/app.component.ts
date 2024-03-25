import { Component, OnInit} from '@angular/core';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})

export class AppComponent implements OnInit{
  pokemenList : Pokemon[]= POKEMONS;
  titre = 'liste de pokemons';
  pokemonSelected : Pokemon | undefined;
  ngOnInit(){
    console.table(this.pokemenList);
    
  }

  selectPokemon(i : string){
    const id : number = +(i);
    const pok: Pokemon|undefined = this.pokemenList.find(pokem => pokem.id == id)
    this.pokemonSelected = pok;
  }
}
