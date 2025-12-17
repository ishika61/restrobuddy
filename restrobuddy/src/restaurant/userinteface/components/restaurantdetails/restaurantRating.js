import { Button, Dialog, TextField } from "@mui/material";
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import { useState } from "react";
import { postData } from '../../../../services/fetchNodeServices'
import swal from "sweetalert2";

export default function RatingComponent()
{

    const labels={0.5: 'Useless',1: 'Useless+',1.5: 'Poor',2: 'Poor+',2.5: 'Ok',3: 'Ok+',3.5: 'Good',4: 'Good+',4.5: 'Excellent',5: 'Excellent+'}

    function getLabelText(value) {
        return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
    }
  
    const [foodRating, setFoodRating] = useState(4)
    const [foodHover, setFoodHover] = useState(-1)
    const [surviceRating, setSurviceRating] = useState(4)
    const [surviceHover, setSurviceHover] = useState(-1)
    const [comment, setComment] = useState('')

    const handleSubmit=async()=>{
        var body={'restaurantid':22, 'userid':1, 'foodrating':foodRating, 'deliveryrating':surviceRating, 'dainingrating':surviceRating, 'restaurantrating':(foodRating+surviceRating)/2, 'review':comment, 'createdat':new Date(), 'updatedat':new Date()}
        var response= await postData('userinterface/submit_user_rating',body)
        if(response.status)
                            {
                                swal.fire({
                                icon: "success",
                                title: response.message,
                                showConfirmButton: false,
                                timer: 2000
                                });
                                        
                            }
                            else
                            {
                                swal.fire({
                                icon: "error",
                                title: response.message,
                                showConfirmButton: false,
                                timer: 2000
                                });
                            }
    }

    return(<Dialog fullWidth open={true}>
        <div>
            <div style={{fontSize:20,padding:10,fontWeight:650,color:'#000',paddingBottom:5}}>
                Rate params Restaurant
            </div>
            <hr></hr>
            <div style={{display:'flex',padding:10,justifyContent:'center',alignItems:'center',fontSize:18,fontWeight:500,marginBottom:10}}>
                <div style={{width:'40%'}}>
                    Survice Rating
                </div>
                <div style={{ width:'60%',display:'flex',alignItems:'center',fontSize:18}}>
                    <Rating value={surviceRating} precision={0.5} size="large" getLabelText={getLabelText} onChange={(e,newValue)=>{setSurviceRating(newValue)}} onChangeActive={(event, newHover)=>{setSurviceHover(newHover)}} emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}/>
                    {surviceRating !== null && (<div style={{ marginLeft:5}}>{labels[surviceHover]}</div>
                    )}
                </div>
            </div>
            <div style={{display:'flex',padding:10,justifyContent:'center',alignItems:'center',fontSize:18,fontWeight:500,marginBottom:20}}>
                <div style={{ width:'40%'}}>food rating</div>
                <div style={{ width:'60%',display:'flex',alignItems:'center'}}>
                    <Rating value={foodRating} precision={0.5} size="large" getLabelText={getLabelText} onChange={(e,newValue)=>{setFoodRating(newValue)}} onChangeActive={(event, newHover)=>{setFoodHover(newHover)}} emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}/>
                    {foodRating !== null && (<div style={{ marginLeft:5}}>{labels[foodHover]}</div>
                    )}
                </div>
            </div>
            <div style={{display:'flex',padding:10,justifyContent:'center',alignItems:'center',fontWeight:500,fontSize:18}}>
                <div style={{ width:'40%'}}>Comments</div>
                <TextField value={comment} onChange={(e)=>setComment(e.target.value)} fullWidth type="text" />
            </div>
            <hr></hr>
            <div style={{marginLeft:'auto',width:'50%',display:'flex',justifyContent:'space-between',padding:10}}>
                <Button fullWidth variant="outlined" style={{textTransform:'none',width:'46%'}}>Skip</Button>
                <Button fullWidth onClick={handleSubmit} variant="outlined" style={{textTransform:'none',width:'46%'}}>Submit</Button>
            </div>
            
        </div>
    </Dialog>)
}