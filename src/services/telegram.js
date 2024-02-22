const getTelegramWebApp = () => {
  const webApp = window?.Telegram?.WebApp
  if (webApp === undefined) {
    console.warn('Telegram WebApp not found')
  }
  return webApp
}


export const getColorScheme = () => getTelegramWebApp()?.colorScheme || 'light'
