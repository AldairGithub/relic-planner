
export const getCurrentVault = (data) => {
  const result = data.filter(obj => obj.vaulted === false)
  return result;
}
