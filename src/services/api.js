import axios from 'axios'

export const key = "9ad303e21440bb61115630066b6af8e3aa1fced1"

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers: {
        'Authorization': `Bearer ${key}`
    }
})

export default api