import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailsPokemonComponent } from './details-pokemon/details-pokemon.component';
import { BorderCardDirective } from './border-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { RouterModule, Routes } from '@angular/router';
import { PokemonService } from './pokemon.service';
import { FormsModule } from '@angular/forms';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';

const pokemonRoutes: Routes = [
  { path : 'edit/pokemons/:id', component : EditPokemonComponent},
  { path : 'pokemons', component: ListPokemonComponent },
  { path: 'pokemons/:id', component : DetailsPokemonComponent},
];

@NgModule({
  declarations: [
    ListPokemonComponent,
    DetailsPokemonComponent,
    BorderCardDirective,
    PokemonTypeColorPipe,
    PokemonFormComponent,
    EditPokemonComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(pokemonRoutes)
  ],
  providers: [PokemonService]
})
export class PokemonModule { }
