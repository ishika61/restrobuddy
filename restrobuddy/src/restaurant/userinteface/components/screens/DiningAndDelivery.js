import DiningOut from '../DiningOut';
import Delivery from '../Delivery';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useEffect, useState } from 'react';
import { postData, serverURL } from '../../../../services/fetchNodeServices';
import SearchHeader from '../SearchHeader';
import useMediaQuery from '@mui/material/useMediaQuery'
import {useTheme} from '@mui/material/styles'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Footer from '../Footer';
export function DiningAndDelivery()
{
    const HomePageData=useParams()
    const navigate=useNavigate()
    const {state:item}=useLocation()
    var theme=useTheme()
    const matches = useMediaQuery(theme.breakpoints.down("md"))
    const [value, setValue] = useState(parseInt(HomePageData?.index));
    const [restaurantDetails,setRestaurantDetails]=useState([])

    //fetch all restaurent data
    const FetchAllRestaurantDetails=async()=>{
        var res=await postData("userinterface/user_fetch_dininganddelivery_data",{cityid:100,'type':item?.type,'name':item?.name})
        setRestaurantDetails(()=>res.data)
    }

    useEffect(function(){FetchAllRestaurantDetails()},[])

        const handleChange = (event, newValue) => {
            setValue(newValue)
        }

        const TabComponent={0:<DiningOut data={restaurantDetails} index={value} />,1:<Delivery data={restaurantDetails} type={item?.name}/>}

        const iconStyle=(icon,bk)=>{
            return(<div style={{background:bk,width:matches?10:80,height:matches?10:80,display:'flex',justifyContent:'center',alignItems:'center',borderRadius:50}}>
                <img src={`${serverURL}/images/${icon}`} label="Dining Out" style={{width:matches?18:35,height:matches?18:35}} />
            </div>)
        }
    return(<div style={{height:'100%'}}>
        <div>
            <div>
                <SearchHeader oldsearch={item?.name}/>
            </div>

            <div style={{display:'flex',marginTop:'2%',marginLeft:'6.5%',color:'grey'}}>
                <div onClick={()=>navigate('/')} style={{cursor:'pointer',textDecoration:'none',color:'grey',marginRight:'0.5%'}}>Home</div>/
                <div style={{textDecoration:'none',color:'grey',marginLeft:'0.5%',marginRight:'0.5%'}}>India</div>/
                <div style={{textDecoration:'none',color:'grey',marginLeft:'0.5%'}}>{restaurantDetails[0]?.cityname}</div>
            </div>
        
            <div style={{marginTop:'1%',marginLeft:'7%'}}>
                <Tabs value={value} onChange={handleChange} TabIndicatorProps={{style:{backgroundColor:'red'}}}>
                    <Tab icon={iconStyle(value==0? 'diningoutcolor.png' : 'diningout.png',value==0? 'rgb(229, 243, 243)':'rgb(248, 248, 248)')} style={{fontSize:matches?14:22,fontWeight:545,color:value==0?'red':'grey',textTransform:'none'}} iconPosition="start" label="Dining Out" />
                    <Tab icon={iconStyle(value==1? 'deliverycolor.png' : 'delivery.png',value==1? 'rgb(252, 238, 192)':'rgb(248, 248, 248)')} style={{fontSize:matches?14:22,fontWeight:545,color:value==1?'red':'grey',textTransform:'none'}} iconPosition="start" label="Delivery" />
                    <Tab icon={iconStyle(value==2? 'nightcolor.png' : 'night.png',value==2? 'rgb(237, 244, 255)':'rgb(248, 248, 248)')} style={{fontSize:matches?14:22,fontWeight:545,color:value==2? 'red':'grey',textTransform:'none'}} iconPosition="start" label="Nightlife" />
                </Tabs>
            </div>
        </div>
        <div>
            {TabComponent[value]}
        </div>
        <div>
            <Footer />
        </div>
    </div>)
}