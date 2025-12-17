import MaterialTable from "@material-table/core";
import { useStyles } from "../category/CategoryInterfaceCss"
import {postData} from "../../../services/fetchNodeServices"
import { useState,useEffect } from "react";

//main function
export default function DisplayAllReviews()
{   
    const classes=useStyles()
    const [reviews,setReviews] =useState([])
    var ADMIN=JSON.parse(localStorage.getItem('RESADMIN'))
    const [restaurantId,setRestaurantId]=useState(ADMIN.restaurantid)

    // fetch all category data 
    const fetchAllReviewsData=async()=>{
        var res=await postData('category/display_all_reviews',{'restaurantid':restaurantId})
        setReviews(res.data)
    }
    
    // return the program after calling data
    useEffect(function(){fetchAllReviewsData()},[])
      
     // main table 
    function displayAll(){
        return(
            <MaterialTable
            title="List Of Reviews" 
            columns={[{title:'Id',render:(rowData)=><div>{rowData.ratingid}</div>},
                {title:'Restaurant',render:(rowData)=><div>{rowData.restaurantname}</div>},
                {title:'user',render:(rowData)=><div>{rowData.categoryname}</div>},
                {title:'Rating',render:(rowData)=><div><div><b>Food: </b> {rowData.foodrating} Star</div><div><b>Delivery: </b> {rowData.deliveryrating} Star</div><div><b>Daining: </b> {rowData.dainingrating} Star</div></div>}, 
                {title:'Over All Rating',render:(rowData)=><div>{rowData.restaurantrating} Star</div>},
                {title:'Comment',render:(rowData)=><div>{rowData.review}</div>},
            ]}
            data={reviews}  //colect data and store data in rowData      
            actions={[
              {
                icon: 'add',
                tooltip: 'User Rating'
              },
            ]}
            />
        )
    }

    //main function return
    return(<div className={classes.root}>
        <div style={{width:1200,maxHeight:700}}>
            {displayAll()}
        </div>
    </div>)
}