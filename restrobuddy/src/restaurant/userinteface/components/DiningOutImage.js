import { Paper } from "@mui/material";
import { serverURL } from "../../../services/fetchNodeServices";
import GradeIcon from '@mui/icons-material/Grade';
import useMediaQuery from '@mui/material/useMediaQuery'
import {useTheme} from '@mui/material/styles'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function DiningOutImage({item,index,value})
{
    const navigate=useNavigate()
    const[getscale,setScale]=useState('')
    const[pic,setPic]=useState(value==0? item.respic:item.catimg)
    var theme=useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('md'))

    return(<Paper onClick={()=>navigate(`/restaurantdetails/${item.restaurantid}`)} onMouseLeave={()=>setScale('scale(1)')} onMouseOver={()=>setScale('scale(1.05)')} style={{transition:'0.5s ease',transform:getscale,animationDuration:'4s',cursor:'pointer',width:matches?'100%':'30%',display:'flex',justifyContent:'space-between',flexDirection:'column',borderRadius:20,marginRight:(index+1)%3===0? '0%':'2%' ,padding:'1%',marginTop:'3%',paddingBottom:matches?10:5}}>
        <div sx={{display:'flex',justifyContent:'center',alignItems:'center',width:'100%'}}>
            <img src={`${serverURL}/images/${pic?.split(',')?.slice(0,1).map((item)=>item)}`} style={{width:'100%',height:300,borderRadius:18}}/>
        </div>
            <div style={{display:'flex'}}>
                <div style={{width:'70%',fontSize:matches?18:22,fontWeight:matches?500:550}}>
                    {item.restaurantname}
                </div>
                <div style={{width:'10%',marginLeft:'auto',display:'flex',justifyContent:'center',background:'green',borderRadius:8,padding:1}}>
                    <div style={{color:'#fff',fontSize:17,fontWeight:650,display:'flex',justifyContent:'center',alignItems:'center'}}>
                        {item.restaurantrating}<GradeIcon sx={{fontSize:15,marginLeft:0.2}} />
                    </div>
                </div>
            </div>
            <div style={{display:'flex'}}>
                <div style={{width:'70%',fontSize:matches?16:19,fontWeight:340,color:'rgb(105, 105, 105)',overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}}>
                    {item.categoryname?.split(',')?.map((item)=>item).join(', ')}
                </div>
                <div style={{marginLeft:'auto',fontSize:matches?16:19,fontWeight:340,color:'rgb(105, 105, 105)'}}>
                    ₹{item.avragecost} for two
                </div>
            </div>
            <div style={{fontSize:matches?16:19,fontWeight:340,color:'rgb(156, 156, 156)'}}>
                {item.address} { item.cityname}
            </div>
            <div style={{display:'flex'}}>
                <div style={{width:'70%',fontSize:matches?16:19,fontWeight:340,color:'rgb(171, 0, 13)'}}>
                    {item.resstatus=='true'? 'open':'close'} Now
                </div>
                <div style={{fontSize:matches?14:16,display:'flex',marginLeft:"auto",fontWeight:600,background:'rgba(255, 255, 255, 0.8)',color:'rgb(54, 54, 54)'}}>
                    1.2km
                </div>
            </div>
    </Paper>)
}