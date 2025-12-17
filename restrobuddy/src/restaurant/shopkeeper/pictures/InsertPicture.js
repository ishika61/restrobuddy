import { Grid2,TextField,Button, FormControl, InputLabel, Select, MenuItem} from "@mui/material"
import { useStyles } from "../pictures/InsertPictureCss"
import TitleBar from "../../components/TitleBar" 
import { CloudUpload } from "@mui/icons-material";
import { useState } from "react";
import { postData } from "../../../services/fetchNodeServices";
import swal from "sweetalert2"

export default function InsertPicture() 
{   const classes = useStyles()
    var ADMIN=JSON.parse(localStorage.getItem('RESADMIN'))
    const [restaurantId,setRestaurantId]=useState(ADMIN.restaurantid)
    const [pictureType,setpictureType]=useState('')
    const [restaurantPicture,setRestaurantPicture]=useState([])
    const [error,setError]=useState({})
    // uploded icon picture show
    const handleIconChange=(event)=>{
        setRestaurantPicture(Object.values(event.target.files))
    }

    const showPictureList=()=>{
        return restaurantPicture.map((item,key)=>{
            return <div key={key}>
                <img src={`${URL.createObjectURL(item)}`} style={{width:60,height:60,}} />
            </div>
        })
    }
    // function for reset
    const handleReset=()=>{
        setRestaurantPicture([])
        setpictureType('')
    }

    //function for validations
    const validate=()=>{
        var err=false
        // if(restaurantPicture.bytes.length==0)
        // {   handleError('restaurantPicture','Pls select icon.....')
        //     err=true
        // }
            return err
    }
    
    // function for data submit
    const handleSubmit=async()=>{
        
        var err=validate()
        if(err==false)
        {
        var formData= new FormData()
        formData.append("restaurantid",restaurantId)
        formData.append("picturetype",pictureType)
        restaurantPicture.map((item,i)=>{
            formData.append(`f${i}`,item)
        })
        var response = await postData('pictureinsert/submit_res_pictures',formData)
        
        if(response.status)
                {
                    swal.fire({
                        icon: "success",
                        title: response.message,
                        showConfirmButton: false,
                        timer: 3000
                      });
                      handleReset()
                }
                else
                {
                    swal.fire({
                        icon: "error",
                        title: response.message,
                        showConfirmButton: false,
                        timer: 3000
                      });
                }
        }
    }
    
    return(
    <div className={classes.root}>
        <div className={classes.box}>
            <TitleBar title='Upload Pictures' url={'/shopkeeperdashboard/insertpicture'}/>
            <Grid2 container spacing={2}>
                <Grid2 item size={12}>
                    <TextField value={restaurantId} label="Restaureat Id" fullWidth />
                </Grid2>
                <Grid2 item size={12}>
                    <FormControl fullWidth>
                        <InputLabel>picture Type</InputLabel>
                        <Select value={pictureType} label='Picture Type' onChange={(e)=>setpictureType(e.target.value)}>
                            <MenuItem value='Ambience'>Ambience</MenuItem>
                            <MenuItem value='Food'>Food</MenuItem>
                            <MenuItem value='Menu'>Menu</MenuItem>
                        </Select>
                    </FormControl>
                </Grid2>
                <Grid2 item size={12} sx={{display:'flex',flexWrap:'wrap',gap:'10px',}}>
                    {restaurantPicture.length!=0?showPictureList():<></>}
                </Grid2>
                <Grid2 item size={12} className={classes.center}>
                    <Button  variant="contained" startIcon={<CloudUpload />} component="label" fullWidth>
                        Upload Icon
                        <input va onChange={handleIconChange}  type="file" multiple hidden/>
                    </Button>
                </Grid2>
                    <Grid2 size={6}>
                        <Button onClick={handleReset} fullWidth variant="contained" >Reset</Button>
                    </Grid2>
                    <Grid2 size={6}>
                        <Button onClick={handleSubmit} fullWidth variant="contained" >Submit</Button>
                    </Grid2>
            </Grid2>
        </div>
    </div>)
}