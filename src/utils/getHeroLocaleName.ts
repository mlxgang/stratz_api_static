import heroes from '../assets/heroes';

export function getLocaleHeroName(id: Number) {
    const index = heroes.findIndex((hero) => hero.id === id)
    return heroes[index].localized_name
}