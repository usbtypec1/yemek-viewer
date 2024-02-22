export const getFoodMenus = async () => {
  const url = 'https://yemek-api.vercel.app'
  const response = await fetch(url)
  return await response.json()
}
