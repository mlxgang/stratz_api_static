import items from '../assets/items';

export function getItemName(id: Number) {
    const index = items.findIndex((item) => item.id === id)
    return items[index].name
}