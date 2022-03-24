import axios from 'axios'
const api = {
    isInDb: async loginObject =>
    {
        console.log(loginObject);
        const {data} = await axios.post('/api/login', loginObject);
        console.log(data);
        return data;
    }, 
    addNewUser : async (registerObject)=>{
        const {data} = await axios.post('/api/register',registerObject );
        return data;
    }


};
export default api;


