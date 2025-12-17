import { BorderRight } from "@mui/icons-material";
import { Button, Tab } from "@mui/material"
import Tabs from '@mui/material/Tabs';
import { useEffect, useState } from 'react';
import FoodListComponent from "./FoodListComponent";
import { postData } from '../../../../services/fetchNodeServices';

export default function OrderOnlinePage({restaurantid})
{
    const[foodData,setFoodData]=useState([])
    const[category,setCategory]=useState([])
    const [value, setValue] = useState()

    //fetch restaurent category data by restaurantid
    const FetchAllCategoryData=async()=>{
        var res=await postData("userinterface/user_fetch_category_data",{'restaurantid':restaurantid})
        setCategory(()=>res.data)
        setValue(res.data[0]?.categoryid || "")
    }


     //fetch restaurent food data by categoryid
    const FetchAllFoodsData=async()=>{
        var res=await postData("userinterface/user_fetch_food_data",{'restaurantid':restaurantid,'categoryid':value})
        setFoodData(()=>res.data)
    }

    useEffect(function(){FetchAllCategoryData()},[restaurantid])
    useEffect(()=>{FetchAllFoodsData(value)}, [value]);

    return(<div style={{width:'100%',display:'flex',maxHeight:600,overflowX:'scroll',scrollbarWidth: 'none',}}>
        <div style={{width:'20%',borderRight:'4px solid #e0e0e0'}}>
            <Tabs value={value} orientation="vertical" onChange={(event, newValue)=>setValue(newValue)} TabIndicatorProps={{style:{backgroundColor:'red',width:3,borderRadius:5}}}>
                {category?.map((item)=>{
                    return <Tab key={item?.categoryid} value={item?.categoryid} style={{width:350,display:'flex',alignItems:'flex-start',justifyContent:'flex-start',fontSize:25,fontWeight:value===item?.categoryid? 500:400,color:value==item?.categoryid?'red':'grey',textTransform:'none',padding:'12px 16px',borderRadius:8,background:value===item?.categoryid? "radial-gradient(circle at right, rgba(211,47,47,0.15), rgba(211,47,47,0.03), transparent)":"transparent",transition: "all 0.3s ease",}} label={`${item?.categoryname}(${item?.count_category})`} />
                })}
            </Tabs>
        </div>
        <div style={{width:'76%'}}>
            <FoodListComponent foods={foodData} restaurantid={restaurantid}/>
        </div>
    </div>)
}