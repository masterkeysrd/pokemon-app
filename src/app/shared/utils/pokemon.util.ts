import { Sprite } from './sprites';
import { SpritesModel } from './../models/sprites.model';
export class PokemonUtil {

  static getImageUrl(id: number): string {
    // return `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  }

  static getSpriteList(sprites: SpritesModel): Array<Sprite>  {
    const res: Array<Sprite> = new Array();
    // tslint:disable-next-line: forin
    for (const spriteKey in sprites) {
      const sprite: Sprite = {
        name: this.getSpriteName(spriteKey),
        url: sprites[spriteKey]
      };
      res.push(sprite);
    }
    return res;
  }

  static getSpriteName(spriteName: string): string {
    return spriteName.replace('_', ' ').replace('-', '');
  }

  static getSpriteComparator() {
    return (obj1, obj2) => {
      if (!obj1.name) {
        return 1;
      }
      if (!obj2.name) {
        return 1;
      }

      const type1 = obj1.name.split(' ')[1];
      const type2 = obj2.name.split(' ')[1];

      if (type1 > type2) {
        return 1;
      } else if (type1 < type2) {
        return -1;
      } else {
        const genre1 = obj1.name.split(' ')[0];
        if (genre1 === 'front') {
          return -1;
        }
        return 1;
      }
    };
  }

  static getIdFromUr(url: string): number {
    return Number(url.split('/')[6]);
  }
}
