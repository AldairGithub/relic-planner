
export const getCurrentVault = (data) => {
  const result = data.filter(obj => obj.vaulted === false)
  return result;
}

export const types = {
  warframe: "Warframe",
  weapon: "Weapon",
  companion: "Companion",
  archwing: "Archwing"
}
