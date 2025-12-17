import RestaurantFiltter from "./RestaurantFiltter"
import FoodCircleComponent from './FoodCircleComponent'
import PopularStoreComponent from "./PopularStoreCircleComponent"
import RestaurentComponent from "./RestaurantComponent"
import { useEffect, useState } from "react"
import { postData} from "../../../services/fetchNodeServices"
export default function Delivery({data,type})
{
    const [restaurantList,setRestaurantList]=useState([])

    const filter=[{id:1,title:'Filters'},
        {id:2,title:'Pure Veg'},
        {id:3,title:'Cuisines'}
    ]
    
    return(<div style={{marginRight:'6%',marginLeft:'6%'}}>
        
         {/* filtter  */}
        <div style={{marginTop:'2%'}}>
            <RestaurantFiltter data={filter}/>
        </div>

        {type? '': <div style={{display:'flex',width:'112%',marginRight:'-6%',marginLeft:'-6%',marginTop:'2%'}}>
            <FoodCircleComponent data={data} />
        </div>}

        {type? '':<div style={{display:'flex',width:'112%',marginRight:'-6%',marginLeft:'-6%',marginTop:'2%'}}>
            <PopularStoreComponent data={data} />
        </div>}

        {type? <div style={{fontSize:26,fontWeight:450,marginTop:30}}>
            {type} Avilievle in this restaurants
        </div>:''}

        {/* restaurant */}
        <div style={{width:'100%'}}>
            <RestaurentComponent data={data} heading='Food Delivery Restaurents in Delhi NCR'/>
        </div>
    </div>)
}