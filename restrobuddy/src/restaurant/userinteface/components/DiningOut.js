import RestaurantFiltter from "./RestaurantFiltter"
import { serverURL } from "../../../services/fetchNodeServices"
import RestaurentComponent from "./RestaurantComponent"
import useMediaQuery from '@mui/material/useMediaQuery'
import {useTheme} from '@mui/material/styles'

export default function DiningOut({data,index})
{
    var theme=useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('md'))

    const filter=[{id:1,title:'Filters'},
        {id:2,title:'Offers'},
        {id:3,title:'Rating:4.5+'},
        {id:4,title:'Pet Friendly'},
        {id:5,title:'Outdoor Seating'},
        {id:6,title:'Serves Alcohol'},
        {id:7,title:'Open Now'},
    ]

    return(<div style={{paddingLeft:'6%',paddingRight:'6%'}}>

        {/* filtter  */}
        <div style={{marginTop:matches? '4%':'2%'}}>
            <RestaurantFiltter data={filter}/>
        </div>

        {/* add */}
        <div style={{width:'100%',height:'15%',marginTop:'4%',display:'flex',justifyContent:'center',alignItems:'center'}}>
            <img src={`${serverURL}/images/diningoutadd.png`} style={{width:'100%',height:'100%',cursor:'pointer'}}/>
        </div>

        {/* restaurant */}
        <div style={{width:'100%'}}>
            <RestaurentComponent data={data} value={index}/>
        </div>
    </div>)
}