import SearchHeader from '../SearchHeader'
import RestaurantInfo from '../restaurantdetails/RestaurantInfo'
import ImageListComponent from '../restaurantdetails/ImageList'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useEffect, useState } from 'react';
import OrderOnlinePage from '../restaurantdetails/OrderOnlinePage';
import { useParams } from 'react-router-dom';
import { postData } from '../../../../services/fetchNodeServices';
import RestaurantPhotos from '../restaurantdetails/RestaurantPhotos';
import Footer from '../Footer';
import useMediaQuery from '@mui/material/useMediaQuery'
import {useTheme} from '@mui/material/styles'
import Reviews from '../restaurantdetails/Reviews';

export default function RestaurentDetails()
{
    var theme=useTheme()
    const matches = useMediaQuery(theme.breakpoints.down("md"))
    const restaurantInfo=useParams()
    const[restaurantDetails,setRestaurantDetails]=useState([])
    const[restaurantPictures,setRestaurantPictures]=useState([])
    const[reviewsData,setReviewsData]=useState([])

    const [value, setValue] = useState(1)

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    const FetchAllReviews=async()=>{
        var res=await postData('userinterface/fetch_all_reviews_by_restaurant',{'restaurantid':restaurantInfo?.restaurantid})
        setReviewsData(res.data)
    }
    //fetch restaurent data
    const FetchRestaurantDetails=async()=>{
        var res=await postData("userinterface/user_fetch_restaurantdetails_data",{restaurantid:restaurantInfo?.restaurantid})
        setRestaurantDetails(()=>res.data)
    }

    //fetch restaurentPictures data
    const FetchRestaurantAllPictures=async()=>{
        var res=await postData("userinterface/user_fetch_restaurantPictures_data",{restaurantid:restaurantInfo?.restaurantid,picturetype:value===0? 'Ambience': value===4? 'Menu':''})
        setRestaurantPictures(()=>res.data)
    }


    useEffect(function(){
        FetchRestaurantDetails()
        FetchRestaurantAllPictures()
        FetchAllReviews()
    },[value])
    
    //tab open system
    const TabPageOpen={1:<OrderOnlinePage restaurantid={restaurantInfo?.restaurantid}/>,
        2:<Reviews reviewsData={reviewsData} restaurantname={restaurantDetails[0]?.restaurantname}/>,
        3:<RestaurantPhotos restaurantPictures={restaurantPictures[0]} />,
        0:<RestaurantPhotos restaurantPictures={restaurantPictures[0]} />,
        4:<RestaurantPhotos restaurantPictures={restaurantPictures[0]} />
    }
    

    const TabHeadings = [
        { heading: 'Over View', link: 0 },
        { heading: 'Order Online', link: 1 },  
        { heading: 'Reviews', link: 2 },  
        { heading: 'Photos', link: 3},
        { heading: 'Menu', link: 4}   
    ]

    return(<div style={{width:'100%',height:'auto'}}>
        <div style={{marginRight:'6.5%'}}>
            <SearchHeader />
        </div>
        <div style={{width:'86%',marginLeft:'6.5%'}}>
            <RestaurantInfo restaurantDetails={restaurantDetails[0]} />
        </div>
        <div style={{marginTop:20,width:'87%',marginLeft:'6.5%'}}>
            <ImageListComponent restaurantDetails={restaurantDetails[0]}/>
        </div>
        <div style={{marginTop:'1%',maxWidth:'86%',overflowX:'auto',whiteSpace: "nowrap",borderBottom:'4px solid #e0e0e0',marginLeft:'6.5%' }}>
            <Tabs value={value} onChange={handleChange} variant='scrollable' scrollButtons allowScrollButtonsMobile TabIndicatorProps={{style:{backgroundColor:'red'}}}>
                {TabHeadings.map((item,index)=>{
                    return <Tab key={index} style={{width:matches?120:200,fontSize:matches?15:25,fontWeight:545,color:value==item.link?'red':'grey',textTransform:'none'}} label={item.heading} />
                })}
            </Tabs>
        </div>
        <div style={{marginTop:20,width:'86%',marginLeft:'6.5%',marginBottom:20}}>
            {TabPageOpen[value]}
        </div>
        <div>
            <Footer />
        </div>
        
    </div>)
}