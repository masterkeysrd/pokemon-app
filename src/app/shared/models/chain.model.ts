import { SpeciesModel } from './species.model';

export interface ChainModel {
  //evolution_details: EvolutionDetail[];
  evolves_to: ChainModel[];
  is_baby: boolean;
  species: SpeciesModel;
}
