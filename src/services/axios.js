import axios from 'axios';

async function getAgendamentos() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        console.log(response);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export {getAgendamentos};