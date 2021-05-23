import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://m.maizuo.com',
    headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"160578660332976758898689"}',
        'X-Host': 'mall.film-ticket.film.list'
    }
}) 
export default  instance