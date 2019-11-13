import { SpeciesModel } from './species.model';
import { FormModel } from './form.model';
import { AbilityModel } from './ability.model';
import { MoveModel } from './move.model';
import { SpritesModel } from './sprites.model';
import { TypeModel } from './type.model';
import { PokemonModel } from 'src/app/shared/models/pokemon.model';

export interface PokemonDetailsModel {
    id?: number;
    name?: string;
    abilities?: AbilityModel[];
    base_experience?: number;
    forms?: FormModel[];
    //game_indices: GameIndice[];
    height?: number;
    held_items?: any[];
    is_default?: boolean;
    location_area_encounters?: string;
    moves?: MoveModel[];
    order?: number;
    species?: SpeciesModel;
    sprites?: SpritesModel;
    //stats: Stat[];
    types?: TypeModel[];
    weight?: number;
}
