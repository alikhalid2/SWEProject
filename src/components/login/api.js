import axios from 'axios'
const api = {
    isInDb: async loginObject =>
    {
        console.log(loginObject);
        const {data} = await axios.post('/api/login', loginObject);
        console.log(data);
        return data;
    }, 


};
export default api;


