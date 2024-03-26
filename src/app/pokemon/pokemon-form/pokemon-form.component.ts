import { Component , Input, OnInit} from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../pokemon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.css'
  ]
})

export class PokemonFormComponent implements OnInit{

  @Input() pokemon : Pokemon;
  typePokemons : string[];

  constructor(
    private pokemonService : PokemonService,
    private router : Router){}

  ngOnInit(): void {
    this.typePokemons = this.pokemonService.getPokemonListType();
  }

  hasType(type : string): boolean{
    return this.pokemon.types.includes(type);
  }

  selectType(event : Event , type : string){

    const isSelected = (event.target as HTMLInputElement).checked;
    if(isSelected){
      this.pokemon.types.push(type);
    }else{
      const index = this.pokemon.types.indexOf(type);
      this.pokemon.types.splice(index, 1);
    }
  }

  isTypesValid(type : string): boolean{

    if(this.pokemon.types.length == 1 && this.hasType(type)){
      return false;
    }
    if(this.pokemon.types.length >= 3 && !this.hasType(type)){
      return false;
    }

    return true;
  }

  onSubmit(){
    console.log("vous avez soumis le formulaire")
    this.router.navigate(['/pokemons', this.pokemon.id]);
  }

  
}
