import heroes from '../assets/heroes';
import { IHero } from '../interfaces/hero.interface';

export function getHeroName(id: Number) {
    heroes.find((hero: IHero) => {
        return hero.id === id
    })
}