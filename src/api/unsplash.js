import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
        'Client-ID c0f6153666b875daf4e8791222dbb860997ee8769646c4aa725aff5729074a7f'
    }
});