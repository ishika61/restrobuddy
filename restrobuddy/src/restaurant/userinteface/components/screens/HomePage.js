import ImageHeaderComponent from "../ImageHeaderComponent"
import PopularRestaurant from "../PopularRestaurant"
import OnlineDining from "../OnlineDining"
import ExploreComponent from "../ExploreComponent"
import RestroBuddyApp from "../RestroBuddyApp"
import Footer from "../Footer"
import useMediaQuery from '@mui/material/useMediaQuery'
import {useTheme} from '@mui/material/styles'
import { postData } from "../../../../services/fetchNodeServices"
import { useEffect, useState } from "react"

export default function HomePage()
{
    var theme=useTheme()
    const matches = useMediaQuery('(min-width:1000px)')
    const[restaurantData,setRestaurantData]=useState([])

    const FetchAllRestaurantData=async()=>{
        var res=await postData("userinterface/user_fetch_homepage_data",{cityid:100})
        setRestaurantData(()=>res.data)
    }

    useEffect(function(){FetchAllRestaurantData()},[])

    var onlinedining=[{id:1,image:'diningtable.png',title:'Dining',discription:"View the city's favourite dining venues"},
        {id:2,image:'online.png',title:'Order Online',discription:"Stay home and order to your doorstep"}
    ]

    var app={title:'Get the RestroBuddy app',discription:' We will send you a link, open it on your phone to download the app',
        code:['+91','+60','+63','+94','+56','+1','+64','+27'],heading:'Download app from'
    }

    var explore={'Popular cuisine near me':['Bakery','Coffee','Drinks','Chaap','Mugalai','Momos','Chiniese'],
    'Popular restaurant near me':['Dhaba',"Cafe's",'Bars','Food Court','Sweet Shop','Quick Bites'],
    'Top restaurant chains':['KFC',"Subway",'WOW Momos','Dominos','Pizza Hut','Burger King',"Mc Donald"],
    'City we deliver to':['Agra',"Indore",'Gwalior','Jhansi','Noida','Pune','Chennai','New Delhi']}


    return(<div style={{width:'100%'}}>
        <div style={{display:'flex',height:matches?600:400}}>
        <ImageHeaderComponent />
        </div>
        <div style={{width:'100%',display:'flex',justifyContent:'center'}}>
            <OnlineDining data={onlinedining} />
        </div>
        <div style={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
            <PopularRestaurant data={restaurantData} title="Popular Restaurant in and around " />
        </div>
        <div style={{width:'100%',marginTop:30,display:'flex',justifyContent:'center',alignItems:'center'}}>
            <RestroBuddyApp  data={app} />
        </div>
        <div style={{width:'100%',marginTop:30,display:'flex',justifyContent:'center',alignItems:'center'}}>
            <ExploreComponent  data={explore} title="Explore option near me" />
        </div>
        <div>
            <Footer  />
        </div>
    </div>)
}