import { getCurrentVault } from "../utils/utils";

const getRelics = "https://cdn.jsdelivr.net/gh/TitaniaProject/warframe-relic-data/data/Relics.min.json"

export async function fetchData() {
  const response = await fetch(getRelics)
  if (!response.ok) {
    const message = `An error has occurred: ${response.status}`
    throw new Error(message);
  }

  const data = await response.json()
  return getCurrentVault(data);
  // currently working on unvaulted items, will add vaulted items in the future
}