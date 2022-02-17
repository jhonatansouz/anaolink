import axios  from "axios";



export const key = "8f476366ccbc495190f80f344917015f3ff6f962"

const api = axios.create({
  baseURL: 'https://api-ssl.bitly.com/v4',
  headers: {
    'Authorization': `Bearer ${key}`
  }
})

export default api;