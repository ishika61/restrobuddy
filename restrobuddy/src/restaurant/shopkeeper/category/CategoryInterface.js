import { Avatar, Grid2,TextField,Button} from "@mui/material"
import { useStyles } from "../category/CategoryInterfaceCss"
import TitleBar from "../../components/TitleBar" 
import { CloudUpload } from "@mui/icons-material";
import category from "../../../assets/category.png"
import { useState } from "react";
import { postData } from "../../../services/fetchNodeServices";
import swal from "sweetalert2"

export default function CategoryInterface() 
{   const classes = useStyles()
    var ADMIN=JSON.parse(localStorage.getItem('RESADMIN'))
    const [restaurantId,setRestaurantId]=useState(ADMIN.restaurantid)
    const [CategoryName,setCategoryName]=useState('')
    const [iconPicture,setIconPicture]=useState({file:category,bytes:''})
    const [error,setError]=useState({})
    // uploded icon picture show
    const handleIconChange=(event)=>{
        setIconPicture({file:URL.createObjectURL(event.target.files[0]),bytes:event.target.files[0]})
    }
    // function for reset
    const handleReset=()=>{
        setCategoryName('')
        setIconPicture({file:category,bytes:''})
    }
    //check cashes aplyee
    const handleError=(label,errorMessage)=>{
        var e=error[label]=errorMessage
        setError((prev)=>({...prev,[label]:errorMessage}))
    }
    //function for validations
    const validate=()=>{
        var err=false
        if(iconPicture.bytes.length==0)
        {   handleError('iconPicture','Pls select icon.....')
            err=true
        }
        if(CategoryName.length==0)
        {   handleError('CategoryName','Category name should not blank.....')
            err=true
        }
            return err
    }
    
    // function for data submit
    const handleSubmit=async()=>{
        var err=validate()
        if(err==false)
        {
        var formData= new FormData()
        formData.append("restaurantid",restaurantId)
        formData.append("categoryname",CategoryName)
        formData.append("icon",iconPicture.bytes)
        formData.append("createdat",new Date())
        formData.append("updatedat",new Date())
        var response=await postData('category/submit_category',formData)

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
            <TitleBar title='Add New Category' url={'/shopkeeperdashboard/displayallcategory'}/>
            <Grid2 container spacing={2}>
                <Grid2 item size={12}>
                    <TextField value={restaurantId} label="Restaurant Id" fullWidth />
                </Grid2>
                <Grid2 item size={12}>
                    <TextField onFocus={()=>handleError('CategoryName','')} error={error.CategoryName} helperText={error.CategoryName} value={CategoryName} onChange={(e)=>setCategoryName(e.target.value)} label="Category Name" fullWidth />
                </Grid2>
                <Grid2 item size={12} className={classes.center}>
                    <Avatar alt="iconPicture" src={iconPicture.file}  sx={{ width: 100, height: 100 }} variant="rounded"/>
                </Grid2>
                <Grid2 item size={12} className={classes.center}>
                    <Button onFocus={()=>handleError('iconPicture','')} variant="contained" startIcon={<CloudUpload />} component="label" fullWidth>
                        Upload Icon
                        <input va onChange={handleIconChange}  type="file" multiple hidden/>
                    </Button>
                    <div className={classes.errorText}>{error.iconPicture}</div>
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