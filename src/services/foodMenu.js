export const computeTotalCaloriesCount = items => {
    const itemsCaloriesCount = items.map(item => item.calories_count)
    return itemsCaloriesCount.reduce((a, b) => a + b, 0)
}