import axios from 'axios';

export const businessServices={
    postBusinessUnit,


}
function postBusinessUnit(user)


{

    return  axios.post(`https://jsonplaceholder.typicode.com/users`,user );
}
