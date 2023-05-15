const API_URL = 'http://127.0.0.1:3030';

export const getProtcolList = async () => {
  const result = await fetch(`${API_URL}/protocolList`, {
    method: 'GET'
  })

  return result.json()
}

export const getWalletAddressList = async () => {
  const result = await fetch(`${API_URL}/wallet`, {
    method: 'GET'
  })

  return result.json()
}

export const registerUser = async (address, walletType) => {
  const result = await fetch(`${API_URL}/wallet/user`, {
    method: 'POST',
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      address,
      walletType
    })
  })

  return result.json()
}
