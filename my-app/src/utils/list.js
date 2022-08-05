
const partsOmitted = ["Blueprint", "Neuroptics", "Chassis", "Systems", "Ornament", "Blade", "Blades", "Boot", "Gauntlet", "Chain", "Hilt", "Head", "Handle", "Receiver", "Barrel", "Stock", "Link", "Pouch", "Stars", "Lower", "Upper", "Limb", "Grip", "String"]
const frameParts = ["Neuroptics", "Chassis", "Systems"]

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

  // Placing Archwings on Warframe typing and companions on weapon typing for now
  const findType = (components) => {
    if (components.length <= 1) {
      return "Ingredient"
    }

    let result = "Weapon"

    components.forEach(comp => {
      frameParts.forEach(e => {
        if (comp.includes(e)) {
          result = "Warframe"
        }
      })
    })

    return result
  }
  
  const items = [...names].map(name => {
    const components = [...ingredients].filter(e => e.includes(name))
    return {
      name: name,
      components: components,
      type: findType(components)
    }
  })
  console.log(items);
  return items
}
