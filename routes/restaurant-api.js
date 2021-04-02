const axios = require('axios')
const api_key = "Ai8f_CNF-7pJC0Nthi-UcLFtfvqKBY-9nJ96K5zAf9sViJTRoJlZOwiOVH7kOM74W6H02iyRGMvqddwm537QigXyL-isElHkq2ipDSYkIxM3nvIjUBTXA8mzhmNcYHYx"
const instance = axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses/',
    timeout: 1000,
    headers: {'Authorization': 'Bearer ' + api_key}
})

module.exports =  {
    get(query){
        let config = {params: query}
        return instance.get('/search',config)
    },

    getRestaurant(id){
        return instance.get('/'+id)
    }
}