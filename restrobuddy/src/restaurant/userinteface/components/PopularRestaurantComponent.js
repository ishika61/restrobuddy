import { Paper } from "@mui/material"
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function PopularRestaurantComponent({item,index,setShowRestaurant,showRestaurant})
{
    const navigate=useNavigate()
    const[getscale,setScale]=useState('')

    return(<Paper onClick={()=>index==8 && showRestaurant==9?setShowRestaurant():navigate(`/restaurantdetails/${item?.restaurantid}`)} onMouseLeave={()=>setScale('scale(1)')} onMouseOver={()=>setScale('scale(1.04)')} style={{cursor:'pointer',overflow:'hidden',transition:'0.5s ease',transform:getscale,animationDuration:'4s',width:355,height:'auto',padding:15,margin:10,display:'flex'}}>
                {index==8 && showRestaurant==9?
                
                    <div style={{display:'flex',alignItems:'center'}}>
                        <div style={{fontSize:19}}>Show More</div>
                    </div>
                :
                    <div>
                        <div style={{fontSize:19}}>{item?.restaurantname}</div>
                        <div style={{fontSize:15,color:'grey',marginTop:5}}>{item?.address}</div>
                    </div>
                }
                <div style={{alignSelf:'center',marginLeft:'auto'}}>
                    <KeyboardArrowRightOutlinedIcon style={{fontSize:17,fontWeight:100}}/>
                </div>  
            </Paper>)
}