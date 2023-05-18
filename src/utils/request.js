export const request = async (method, url, data) => {
  try {
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
    const body = data ? JSON.stringify(data) : data
    
    const response = await fetch(url, {
      method,
      headers,
      body      
    })

    return await response.json()
  } catch (e) {
    console.warn('Error:', e.message)
  }
}