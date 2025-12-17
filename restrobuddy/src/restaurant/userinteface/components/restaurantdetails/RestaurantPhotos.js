import ImageListPage from "./ImageListPage"


export default function RestaurantPhotos({restaurantPictures})
{ 
    const ShowList=()=>{
        return restaurantPictures?.pictures?.split(',')?.map((item,index)=>{
            return (<ImageListPage item={item} key={index} index={index}/>)
        })
    }
    return(<div style={{display:'flex',flexWrap:'wrap',justifyContent:'center',width:'100%'}}>
        {ShowList()}
    </div>)
}