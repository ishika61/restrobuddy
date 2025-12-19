import axios from "axios";
const serverURL="http://localhost:5000";


function generateOtp() {
  return Math.floor(100000 + Math.random() * 900000); // 100000 se 999999
}

async function getData(url)
{
    try
    {
        var response=await axios.get(`${serverURL}/${url}`)
        var data=response.data
        return data
    }
    catch(e)
    {
        return null
    }
}
async function postData(url,body)
{
    try
    {
        var response=await axios.post(`${serverURL}/${url}`,body)
        var data=response.data
        return data
    }   
    catch(e)
    { console.log(e)
        if(e.status===401)
        {
            return({data:[],message:'Mobile number and Email allready exist',status:false})
        }
        else
        {
            return({data:[],message:'Database error, pls contact database administration.....',status:false})
        }
    }
}
export {serverURL,getData,postData,generateOtp}