import { Button} from "@mui/material";
import WifiCalling3Icon from '@mui/icons-material/WifiCalling3';
import DirectionsIcon from '@mui/icons-material/Directions';
import ReviewsIcon from '@mui/icons-material/Reviews';
import ReplyIcon from '@mui/icons-material/Reply';
import star from "../../../../assets/star.png";
import info from "../../../../assets/infoicon.png"
import { useNavigate } from "react-router-dom";
import useMediaQuery from '@mui/material/useMediaQuery'
import {useTheme} from '@mui/material/styles'

export default function RestaurantInfo({restaurantDetails})
{
    var theme=useTheme()
    const matches = useMediaQuery(theme.breakpoints.down("md"))
    const navigate=useNavigate()
    return(<div style={{width:'100%'}}>

        {/* address line */}
        <div style={{color:'grey',fontSize:matches? 14:16}}>
            <span onClick={()=>navigate('/')} style={{cursor:'pointer',color:'grey',marginRight:'0.5%'}}>Home</span>/
            <span style={{cursor:'pointer',color:'grey',marginLeft:'0.5%',marginRight:'0.5%'}}>India</span>/
            <span onClick={()=>navigate(`/dininganddelivery/${1}/${restaurantDetails?.cityid}`)} style={{cursor:'pointer',color:'grey',marginLeft:'0.5%',marginRight:'0.5%'}}>{restaurantDetails?.cityname}</span>/
            <span style={{textDecoration:'none',color:'grey',marginLeft:'0.5%',marginRight:'0.5%'}}>{restaurantDetails?.address}</span>/
            <span style={{textDecoration:'none',color:'grey',marginLeft:'0.5%',marginRight:'0.5%'}}>Dosa</span>/
            <span onClick={()=>navigate(`/dininganddelivery/${1}/${restaurantDetails?.cityid}`)} style={{cursor:'pointer',color:'grey',marginLeft:'0.5%'}}>Order Online</span>
        </div>

        {/* restaurent details */}
        <div style={{display:'flex',marginTop:'2%'}}>
            <div style={{width:matches?'90%':'65%'}}>
                <div style={{fontSize:matches?25:40,fontWeight:matches?400:500,color:'rgb(28, 28, 28)'}}>
                    {restaurantDetails?.restaurantname}
                </div>
                <div style={{fontSize:matches?16:19,fontWeight:matches?500:350,width:matches?'70%':'50%',color:'rgb(105, 105, 105)',overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}}>
                    {restaurantDetails?.categoryname?.split(',')?.map((item)=>item).join(', ')}
                </div>
                <div style={{fontSize:matches?16:19,fontWeight:matches?500:350,marginBottom:10,color:'rgb(156, 156, 156)',width:matches?'70%':'50%',overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}}>
                    {restaurantDetails?.address}, {restaurantDetails?.cityname}, {restaurantDetails?.statename}
                </div>
                <div style={{display:matches?'':'flex',justifyContent:matches?'space-between':'',alignItems:'center',marginBottom:20}}>
                    <div style={{border:'1px solid grey',borderRadius:50,width:'auto',paddingRight:10,paddingLeft:10,height:'auto',padding:2,display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <div style={{fontSize:18,fontWeight:350,color:' rgb(244, 162, 102)',marginRight:5,marginLeft:5}}>
                            {restaurantDetails?.resstatus=='true'? 'Open Now':'Close Now'}
                        </div>
                        {restaurantDetails?.resstatus=='true'?<div style={{display:'flex',fontSize:18,fontWeight:400,color:'rgb(156, 156, 156)'}}>
                            -<span style={{marginRight:10,marginLeft:5}}>{restaurantDetails?.opentime}</span>-
                            <span style={{marginRight:5,marginLeft:5}}>{restaurantDetails?.closetime} </span>
                            <span>(today)</span>
                            <span style={{cursor:'pointer',marginRight:5,display:'flex',alignItems:'center',marginLeft:5}}><img src={info} width={20}/></span>
                        </div>:''}
                    </div>
                    {matches? '':<div style={{width:0,border:'0.5px solid grey',height:15,margin:5}}></div>}
                    <div style={{display:'flex',marginTop:matches?8:0}}><div style={{fontSize:18,marginLeft:5,marginRight:matches?'2%':5,fontWeight:400,color:'rgb(105, 105, 105)'}}>
                        ₹{restaurantDetails?.avragecost} for two
                    </div>
                    {matches? '':<div style={{width:0,border:'0.5px solid grey',height:15,margin:5}}></div>}
                    <WifiCalling3Icon sx={{color:'red'}}/>
                    <div style={{marginLeft:8}}>
                        <a href="" style={{fontSize:17,marginRight:5,fontWeight:400,color:'rgb(105, 105, 105)'}}>
                            +91{restaurantDetails?.mobilenumber}
                        </a>
                    </div></div>
                </div>
                <div style={{marginTop:matches?0:5,display:'flex'}}>
                    <Button variant="outlined" sx={{textTransform:'none',color:'grey',border:'0.4px solid grey',borderRadius:2,padding:1,fontSize:18,fontWeight:200,height:matches?40:'',fontSize:matches?15:'',marginRight:matches?'3%':'1%'}}><DirectionsIcon sx={{color:'red',marginRight:1,fontSize:matches?'medium':''}}/>Direction</Button>
                    <Button variant="outlined" sx={{textTransform:'none',color:'grey',border:'0.4px solid grey',borderRadius:2,padding:1,fontSize:18,fontWeight:200,height:matches?40:'',fontSize:matches?15:'',marginRight:matches?'3%':'1%'}}><ReplyIcon sx={{color:'red',marginRight:1,fontSize:matches?'medium':''}}/>Share</Button>
                    <Button variant="outlined" sx={{textTransform:'none',color:'grey',border:'0.4px solid grey',borderRadius:2,padding:1,fontSize:18,fontWeight:200,height:matches?40:'',fontSize:matches?15:''}}><ReviewsIcon sx={{color:'red',marginRight:1,fontSize:matches?'medium':''}}/>Reviews</Button>
                </div>
            </div>

            {/* restaurant ratings */}
            {matches?'':<div style={{width:matches?'100%':'32%',marginLeft:'auto',display:'flex', justifyContent:'space-between'}}>
                <div style={{display:'flex',height:20,alignItems:'center'}}>
                    <div style={{display:'flex',justifyContent:'center',alignItems:'center',width:65,height:30,background:'green',fontSize:22,padding:3,borderRadius:10,fontWeight:650,color:'#fff'}}>
                        {restaurantDetails?.dainingrating}
                        <img src={star} style={{width:20,height:20,marginLeft:5}}/>
                    </div>
                    <div style={{borderBottom:'1px dashed black',marginLeft:7}}>
                        <div style={{fontSize:19,fontWeight:550,color:'#000'}}>
                            {restaurantDetails?.totaldainingrating}
                        </div>
                        <div style={{fontSize:17,marginRight:5,marginBottom:3,fontWeight:400,color:'rgb(105, 105, 105)'}}>
                            Daining Ratings
                        </div>
                    </div>
                </div>
                <div style={{display:'flex',height:20,alignItems:'center'}}>
                    <div style={{display:'flex',justifyContent:'center',alignItems:'center',width:65,height:30,background:'green',fontSize:22,padding:3,borderRadius:10,fontWeight:650,color:'#fff'}}>
                        {restaurantDetails?.deliveryrating}
                        <img src={star} style={{width:20,height:20,marginLeft:5}}/>
                    </div>
                    <div style={{borderBottom:'1px dashed black',marginLeft:7}}>
                        <div style={{fontSize:19,fontWeight:550,color:'#000'}}>
                            {restaurantDetails?.totaldeliveryrating}
                        </div>
                        <div style={{fontSize:17,marginRight:5,marginBottom:3,fontWeight:400,color:'rgb(105, 105, 105)'}}>
                            Delivery Ratings
                        </div>
                    </div>
                </div>
            </div>}
        </div>
        {matches? <div style={{width:'100%',marginBottom:30,marginLeft:'auto',marginTop:matches?30:'',display:'flex',}}>
                <div style={{display:'flex',height:20,alignItems:'center',marginRight:'1.4%'}}>
                    <div style={{display:'flex',justifyContent:'center',alignItems:'center',width:45,height:30,background:'green',fontSize:19,padding:2,borderRadius:10,fontWeight:650,color:'#fff'}}>
                        {restaurantDetails?.dainingrating}
                        <img src={star} style={{width:15,height:15,marginLeft:3}}/>
                    </div>
                    <div style={{borderBottom:'1px dashed black',marginLeft:7}}>
                        <div style={{fontSize:19,fontWeight:550,color:'#000'}}>
                            {restaurantDetails?.totaldainingrating}
                        </div>
                        <div style={{fontSize:17,marginRight:1,marginBottom:3,fontWeight:400,color:'rgb(105, 105, 105)'}}>
                            Daining Ratings
                        </div>
                    </div>
                </div>
                <div style={{display:'flex',height:20,alignItems:'center'}}>
                    <div style={{display:'flex',justifyContent:'center',alignItems:'center',width:45,height:30,background:'green',fontSize:19,padding:2,borderRadius:10,fontWeight:650,color:'#fff'}}>
                        {restaurantDetails?.deliveryrating}
                        <img src={star} style={{width:15,height:15,marginLeft:3}}/>
                    </div>
                    <div style={{borderBottom:'1px dashed black',marginLeft:7}}>
                        <div style={{fontSize:19,fontWeight:550,color:'#000'}}>
                            {restaurantDetails?.totaldeliveryrating}
                        </div>
                        <div style={{fontSize:17,marginRight:1,marginBottom:3,fontWeight:400,color:'rgb(105, 105, 105)'}}>
                            Delivery Ratings
                        </div>
                    </div>
                </div>
            </div>:''}
    </div>)
}