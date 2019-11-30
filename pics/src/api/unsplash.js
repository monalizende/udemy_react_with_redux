import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        'Authorization' : 'Client-ID 8456b79ab2e84d0480127130408b7d20d06ab9e52158a40fbd9eb0e760681d5a'
    }
})