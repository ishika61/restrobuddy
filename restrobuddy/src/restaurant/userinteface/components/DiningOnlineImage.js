import { Paper } from "@mui/material"
import { serverURL } from "../../../services/fetchNodeServices"
import { useState } from "react"
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";

export default function DiningOnlineImage({item,index})
{
    const navigate=useNavigate()
    const[getscale,setScale]=useState('')
    var theme=useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('900')) 
    const cityid=100
        return(<Paper onClick={()=>navigate(`/dininganddelivery/${index}/${cityid}`)} onMouseLeave={()=>setScale('scale(1)')} onMouseOver={()=>setScale('scale(1.05)')} style={{transition:'0.5s ease',transform:getscale,animationDuration:'4s',width:'35%',height:matches?155:250,display:'flex',flexDirection:'column',borderRadius:20,margin:20,cursor:'pointer'}}>
            <div style={{display:'flex'}}>
                <img src={`${serverURL}/images/${item?.image}`} style={{objectFit:'cover',width:'100%',height:matches?100:155,borderTopLeftRadius:20,borderTopRightRadius:20}}/>
            </div>
            <div style={{marginTop:10,fontSize:'1.5vw',fontWeight:'700',marginLeft:20}}>
                {item?.title}
            </div>
            <div style={{marginTop:5,fontSize:'1.4vw',fontWeight:500,color:'grey',marginLeft:20,justifyContent:'center'}}>
                {item?.discription}
            </div>
        </Paper>)
}