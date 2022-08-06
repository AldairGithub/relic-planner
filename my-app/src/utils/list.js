import { types } from "./utils"

const partsOmitted = ["Blueprint", "Neuroptics", "Chassis", "Carapace", "Cerebrum", "Harness", "Wings", "Systems", "Ornament", "Blade", "Blades", "Boot", "Gauntlet", "Chain", "Hilt", "Head", "Handle", "Receiver", "Barrel", "Stock", "Link", "Pouch", "Stars", "Lower", "Upper", "Limb", "Limbs", "Grip", "String", "Guard"]
const frameParts = ["Neuroptics", "Chassis"]
const companionParts = ["Carapace", "Cerebrum"]
const archwingParts = ["Harness", "Wings"]

// filters and returns name, components, and type of item
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

  const findType = (components) => {
    if (components.length <= 1) {
      return "Ingredient"
    }

    const searchForType = (arr, compareArr) => arr.split(" ").some(e => compareArr.includes(e))
    let result = ''
    components.forEach(comp => {
      if (searchForType(comp, frameParts)) {
        result = types.warframe
      } else if (searchForType(comp, companionParts)) {
        result = types.companion
      } else if (searchForType(comp, archwingParts)) {
        result = types.archwing
      } else {
        result = types.weapon
      }
    })

    return result
  }
  
  const items = [...names].map(name => {
    const components = [...ingredients].filter(e => e.includes(name))
    const type = findType(components)
    return {
      name: name,
      components: components,
      type: type
    }
  })
  console.log(items);
  return items
}
