const API_URL = 'http://127.0.0.1:3030';

export const getProtcolList = async () => {
  const result = await fetch(`${API_URL}/protocolList`, {
    method: 'GET'
  })

  return result.json()
}

export const getWalletAddressList = async () => {
  const result = await fetch(`${API_URL}/wallet/user`, {
    method: 'GET'
  })

  return result.json()
}
