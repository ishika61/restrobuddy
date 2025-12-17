import DiningOnlineImage from "./DiningOnlineImage"

export default function OnlineDining({data})
{
    const showList=()=>{
        return data.map((item,index)=>{
            return(<DiningOnlineImage index={index} key={item?.id} item={item} />)
        })
    }
    
    return(<div style={{display:'flex',justifyContent:'center',width:'100%'}}>
        {showList()}
    </div>)
    
}