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
        const {data} = await axios.post('/api/register', registerObject);
        return data;
    },
    loginInfo: async () => {
        const {data} = await axios.get('/api/user');
        console.log(data);
        return data;
    },
    setLogin: async (username) => {
        await axios.put('/api/user', {username});
    },
    setLogout: async () => {
        await axios.put('/api/user/logout');
    },
    gameInfo: async () => {
        const {data} = await axios.get('/api/games');
        return data;
    },
    search: async (search) => {
        const {data} = await axios.get('/api/search', {params: {search: search}});
        return data;
    }

};
export default api;


