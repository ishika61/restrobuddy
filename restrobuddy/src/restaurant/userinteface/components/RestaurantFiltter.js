import { Button } from "@mui/material"
import filter from '../../../assets/filter.png'
import useMediaQuery from '@mui/material/useMediaQuery'
import {useTheme} from '@mui/material/styles'

export default function RestaurantFiltter({data})
{
    var theme=useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('md'))
    return data?.slice(0,matches?3:7)?.map((item)=>{
        return(<Button key={item.id} sx={{border:'1px solid rgb(207, 207, 207)',fontSize:matches? 14:18,color:'rgb(156, 156, 156)',background:'rgb(255, 255, 255)',textTransform:'none',borderRadius:matches?1.7:2.5,marginRight:matches?1:2}} value={item.id} variant="outline">
            {item.id==1? <img src={filter} style={{width:20,marginRight:6}}/>:<></>}{item.title}
            </Button>)
    })
}