import DiningOutImage from "./DiningOutImage"
import useMediaQuery from '@mui/material/useMediaQuery'
import {useTheme} from '@mui/material/styles'

export default function RestaurentComponent({data,value})
{
    var theme=useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('md'))

    const showlist=()=>{
        return data?.map((item,index)=>{
            return(<DiningOutImage item={item} value={value} key={item.restaurantid} index={index}/>)
        })
    }
    return(<div>
        <div style={{fontSize:matches?20:38,fontWeight:500,marginTop:12}}>{data?.cityname}</div>
    <div style={{display:'flex',flexWrap:'wrap',justifyContent:'center',width:'100%'}}>
        {showlist()}
    </div>
    </div>)
}