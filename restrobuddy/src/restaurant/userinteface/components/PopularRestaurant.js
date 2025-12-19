import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import PopularRestaurantComponent from "./PopularRestaurantComponent";
import { useEffect, useState } from 'react';
export default function PopularRestaurant({data,title})
{
    var theme=useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('sm'))
    const[showRestaurant,setShowRestaurant]=useState(9) 
    const showlist=()=>{
        return data?.slice(0,showRestaurant).map((item,index)=>{
            return(<PopularRestaurantComponent key={item?.restaurantid} item={item} index={index} setShowRestaurant={setShowRestaurant} showRestaurant={showRestaurant} />)
        })
    }
    useEffect(function(){},[showRestaurant])
    return(<div style={{width:'100%',justifyContent:'center',alignItems:'center',display:'flex',flexDirection:'column'}}>
        <div style={{width:'72%',marginLeft:10,marginTop:50,marginBottom:10,fontSize:matches?18:28,fontWeight:560}}>
            {title}{data[0]?.cityname}
        </div>
        <div style={{display:'flex',justifyContent:'center',flexWrap:'wrap',width:'88%'}}>
        {showlist()}
        </div>
    </div>)
}