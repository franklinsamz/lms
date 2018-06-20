import axios from 'axios';

export const dashboardService={
    courseCount,
    top_course,
    top_businessunit,
    top_skills,

}

function courseCount()
{
   return  axios.post(`http://lmsapi.labsls.com/dashboard/getcoursecount`);
}

function top_course()
{
    return  axios.post(`http://lmsapi.labsls.com/dashboard/gettopcourse`);
}
function top_businessunit()
{
    return  axios.post(`http://lmsapi.labsls.com/dashboard/getrecentprogram`);
}

function top_skills()
{
    return  axios.post(`http://lmsapi.labsls.com/dashboard/gettopskills`);
}