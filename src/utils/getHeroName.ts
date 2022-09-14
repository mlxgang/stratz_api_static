import heroes from '../assets/heroes';

export function getHeroName(id: Number) {
    const index = heroes.findIndex((hero) => hero.id === id)
    return heroes[index].name
}