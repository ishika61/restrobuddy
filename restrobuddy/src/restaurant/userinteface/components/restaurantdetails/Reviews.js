import { useEffect, useState } from "react"
import { postData } from "../../../../services/fetchNodeServices"
import star from "../../../../assets/star.png";
import admin from "../../../../assets/admin.png"

export default function Reviews({reviewsData,restaurantname})
{
    const ShowReviews=()=>{
        return reviewsData?.map((item)=>{
            return(<div style={{width:'80%',height:'auto',borderRadius:20,border:'1px solid #edececff',padding:5,marginBottom:10}}>
                <div style={{display:'flex',alignItems:'center',paddingLeft:10}}>
                    <div>
                        <img src={admin} style={{width:30,height:30,borderRadius:25}} />
                    </div>
                    <div style={{fontSize:20,marginLeft:10,fontWeight:600}}>
                        <div>{item?.username}</div>
                    </div>
                </div>
                <div style={{padding:10}}>
                    <div style={{display:'flex',alignItems:'center'}}>
                        <div style={{display:'flex',marginRight:10,justifyContent:'center',alignItems:'center',width:30,height:15,background:'green',fontSize:14,padding:1,borderRadius:5,fontWeight:650,color:'#fff'}}>
                        {item?.dainingrating}
                        <img src={star} style={{width:10,height:10,marginLeft:3}}/>
                        </div>
                        <div style={{marginRight:10}}>DELIVERY</div>
                        <div>{item?.createdat}</div>
                    </div>
                    <div style={{marginTop:8,fontSize:18,fontWeight:400}}>
                        {item?.review}
                    </div></div>
            </div>)
        })
    }

    return(<div style={{width:'100%',maxHeight:600,padding:10,marginTop:10}}>
        <div style={{fontSize:22,marginBottom:20,color:'#000',fontWeight:700,padding:5}}>
            {restaurantname} Reviews
        </div>
        <div>
            {ShowReviews()}
        </div>
    </div>)
}