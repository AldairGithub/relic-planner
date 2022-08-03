
const Item = function(name, components){
  this.name = name
  this.components = components
}

const partsOmitted = ["Blueprint", "Neuroptics", "Chassis", "Systems", "Ornament", "Blade", "Blades", "Boot", "Gauntlet", "Chain", "Hilt", "Head", "Handle", "Receiver", "Barrel", "Stock", "Link", "Pouch", "Stars", "Lower", "Upper", "Limb", "Grip", "String"]

// filters and returns unique items
// need to create object that holds name and components
export const getListOfItems = (data) => {
  let values = new Set()
  
  data.forEach(obj => {
    obj.rewards.forEach(drop => {
      const item = drop.item.split(" ").filter(e => !partsOmitted.includes(e))
      values.add(item.join(" "))
    })
  })
  console.log(values);
  return values
}

// we want to keep track of what the user has picked,
// we need a list of items available to the user,
// this list will work with what we have on the api,
// we can use the api data to populate the third page on what the user has picked
// we need a way for the user to see their options