import axios from 'axios';

export const businessServices={
    allBusinessUnit,


}
function allBusinessUnit(user)


{

    return  axios.get(`http://lmsapi.labsls.com/dashboard/businessunit`);
}
