import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://192.168.1.6:8080/api'
})
instance.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
instance.defaults.headers.common['Access-Control-Allow-Methods'] = 'GET,PUT,POST,DELETE,PATCH,OPTIONS';
instance.defaults.headers.get['Content-Type'] = 'application/json'

export default instance