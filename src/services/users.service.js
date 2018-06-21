import axios from 'axios';
export const userServices={
    listuser,

}
function listuser()
{
    return  axios.get(`http://lmsapi.labsls.com/user/alluser` );
}
