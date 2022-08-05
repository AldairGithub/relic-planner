
const partsOmitted = ["Blueprint", "Neuroptics", "Chassis", "Systems", "Ornament", "Blade", "Blades", "Boot", "Gauntlet", "Chain", "Hilt", "Head", "Handle", "Receiver", "Barrel", "Stock", "Link", "Pouch", "Stars", "Lower", "Upper", "Limb", "Grip", "String"]

// filters and returns unique items
// need to create object that holds name and components
export const getListOfItems = (data) => {
  let names = new Set()
  let ingredients = new Set()
  
  data.forEach(obj => {
    obj.rewards.forEach(drop => {
      const item = drop.item.split(" ").filter(e => !partsOmitted.includes(e))
      const itemName = item.join(" ")
      names.add(itemName)
      ingredients.add(drop.item)
    })
  })
  
  const items = [...names].map(obj => {
    return {
      name: obj,
      components: [...ingredients].filter(e => e.includes(obj))
    }
  })
  return items
}
