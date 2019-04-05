import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 344a7cfb3ee6e35c48dfef7a2224a8a373aa1e70843c66e3f6114ea15314c826'
    }
})