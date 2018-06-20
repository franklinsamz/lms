import axios from 'axios';

export const courseServices={
    listcourse,


}
function listcourse(user)


{

    return  axios.post(`http://lmsapi.labsls.com/courseplayer/listcourse`,user );
}
