import {useStyles} from "../food/FoodInterfaceCss"
import TitleBar from "../../components/TitleBar"
import { Switch,Avatar,FormGroup,Radio,RadioGroup,FormControlLabel, Grid2,TextField,FormControl,InputLabel,Select,MenuItem,Button,FormHelperText, FormLabel} from "@mui/material"
import { CloudUpload } from "@mui/icons-material";
import { useState,useEffect} from "react";
import food from "../../../assets/category.png"
import { getData,postData } from "../../../services/fetchNodeServices";
import swal from "sweetalert2"
export default function FoodInterface()
{   
    var ADMIN=JSON.parse(localStorage.getItem('RESADMIN'))
    //states
    const classes = useStyles()
    const [restaurantId,setRestaurantId]=useState(ADMIN.restaurantid)
    const [categoryId,setCategoryId]=useState('')
    const [subcategoryId,setSubcategoryId]=useState('')
    const [foodName,setFoodName]=useState('')
    const [price,setPrice]=useState('')
    const [statas,setStatas]=useState('Available')
    const [statusType,setStatusType]=useState(true)
    const [ingredients,setIngredients]=useState('')
    const [offerPrice,setOfferPrice]=useState('')
    const [categories,setCategories]=useState([])
    const [subcategories,setSubCategories]=useState([])
    const [foodIcon,setFoodIcon]=useState({file:food,bytes:''})
    const [statusLable,setStatusLable]= useState('Vegitarian')
    const [error,setError]=useState({})


    //fetch all category======================================
    const fetchAllCategory=async()=>{
        var response= await postData("food/fetch_all_category",{'restaurantid':restaurantId})
        setCategories(response.data)
    }
    useEffect(function(){fetchAllCategory()},[])
    //fill all categories in dropdown=================
    const fillCategory=()=>{
        return categories.map((item)=>{
            return <MenuItem value={item.categoryid}>{item.categoryname}</MenuItem>
        })
    }
    const handleCategoryChange=(event)=>{
        setCategoryId(event.target.value)
        fetchAllSubcategory(event.target.value)
    }
    //fetch all subcategory====================================
    const fetchAllSubcategory=async(categoryid)=>{
        var response=await postData("food/fetch_all_subcategory",{categoryid:categoryid})
        setSubCategories(response.data)
    }
    //fill subcategory dropdown===============
    const fillSubcategory=()=>{
        return subcategories.map((item)=>{
            return <MenuItem value={item.subcategoryid}>{item.subcategoryname}</MenuItem>
        })
    }

    //function for change the food icon
    const handleFoodIconChange=(event)=>{
        setFoodIcon({file:URL.createObjectURL(event.target.files[0]),bytes:event.target.files[0]})
    }

    //function for switch button
    const handleSwitchChange=(event)=>{
        const isChecked=event.target.checked
        setStatusType(isChecked)
        setStatusLable(isChecked? "Vegitarian" : "Non-Vegitarian")
    }
    //function for radio button
    const handleRadioChange=(event)=>{
        setStatas(event.target.value)
    }

    //check casess aplyee
    const handleError=(label,errorMessage)=>{
        var e=error[label]=errorMessage
        setError((prev)=>({...prev,[label]:errorMessage}))
    }

    //function for check validations
    const validate=()=>{
        var err=false
        if(foodIcon.bytes.length==0)
        {handleError('foodIcon','Pls select icon.....')
            err=true
        }
        
        if(categoryId.length==0)
        {
            handleError("categoryId","Pls select Category....")
            err=true
        }
        if(subcategoryId.length==0)
        {
            handleError("subcategoryId","Pls select SubCategory....")
            err=true
        }
        if(foodName.length==0)
        {   handleError('foodName','Food name should not blank.....')
            err=true
        } 
        if(ingredients.length==0)
        {   handleError('ingredients','ingredients should not blank.....')
            err=true
        }  
        var prices=/^[0-9]+(\.[0-9]+)?$/
        if(!prices.test(price))
        {
            handleError("price","Pls input food price....")
            err=true
        }
        var offer_Price=/^[0-9]+(\.[0-9]+)?$/
        if(!offer_Price.test(offerPrice))
        {
            handleError("offerPrice","Pls input offer price....")
            err=true
        }
        return err
    }

    //function for Reset the table
    const handleReset=()=>{
        setCategoryId('')
        setSubcategoryId('')
        setFoodName('')
        setPrice('')
        setStatas('Available')
        setStatusLable('Vegitarian')
        setStatusType(true)
        setOfferPrice('')
        setIngredients('')
        setFoodIcon({file:food,bytes:''})
    }

    // function for submit data 
    const handleSubmit=async()=>{
        var err=validate()
        if(err==false)
        {
        var formData= new FormData()
        formData.append('restaurantid',restaurantId)
        formData.append('categoryid',categoryId)
        formData.append('subcategoryid',subcategoryId)
        formData.append('foodname',foodName)
        formData.append('price',price)
        formData.append('offerprice',offerPrice)
        formData.append('status',statas)
        formData.append('statustype',statusType)
        formData.append('ingredients',ingredients)
        formData.append('icon',foodIcon.bytes)
        formData.append('createdat',new Date())
        formData.append('updatedat',new Date())

        var response=await postData('food/submit_food_data',formData)

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
    
    // Food form Main Sturcture
    return(<div className={classes.root}>
            <div className={classes.box}>
                <TitleBar title='Add New Food' url={'/shopkeeperdashboard/displayallfood'}/>
                <Grid2 container spacing={2}>
                    <Grid2 item size={4}>
                        <TextField value={restaurantId} label="Restaureat Id" fullWidth />
                    </Grid2>
                    <Grid2 item size={4}>
                        <FormControl fullWidth error={error.categoryId}>
                            <InputLabel>Category</InputLabel>
                            <Select value={categoryId} onFocus={()=>handleError('categoryId','')} label='Category' onChange={handleCategoryChange}>
                                {fillCategory()}
                            </Select>
                            <FormHelperText>{error.categoryId}</FormHelperText>
                        </FormControl>
                    </Grid2>
                    <Grid2 item size={4}>
                        <FormControl fullWidth error={error.subcategoryId}>
                            <InputLabel>Subcategory</InputLabel>
                            <Select value={subcategoryId} onFocus={()=>handleError('subcategoryId','')} onChange={(e)=>setSubcategoryId(e.target.value)} label='Subcategory'>
                                {fillSubcategory()}
                            </Select>
                            <FormHelperText>{error.subcategoryId}</FormHelperText>
                        </FormControl>
                    </Grid2>

                    <Grid2 item size={4}>
                        <TextField onFocus={()=>handleError('foodName','')} error={error.foodName} helperText={error.foodName} value={foodName} onChange={(e)=>setFoodName(e.target.value)} label="Food Name" fullWidth />
                    </Grid2>
                    <Grid2 item size={4}>
                        <TextField onFocus={()=>handleError('price','')} error={error.price} helperText={error.price} value={price} onChange={(e)=>setPrice(e.target.value)} label="Price" fullWidth />
                    </Grid2>
                    <Grid2 item size={4}>
                        <TextField onFocus={()=>handleError('offerPrice','')} error={error.offerPrice} helperText={error.offerPrice} value={offerPrice} onChange={(e)=>setOfferPrice(e.target.value)} label="Offer Price" fullWidth />
                    </Grid2>

                    <Grid2 item size={6}>
                        <FormControl fullWidth>
                            <FormLabel id="demo-row-radio-buttons-group-label">Status</FormLabel>
                            <RadioGroup value={statas} onChange={handleRadioChange} row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
                                <FormControlLabel value="Available" control={<Radio />} label="Available"/>
                                <FormControlLabel value="Non-Available" control={<Radio />} label="Non-Available"/>
                            </RadioGroup>
                        </FormControl>
                    </Grid2>
                    <Grid2 item size={6}>
                        <FormGroup>
                            <FormLabel>Status Type</FormLabel>
                            <FormControlLabel  control={<Switch checked={statusType} onChange={handleSwitchChange} />} label={statusLable} />
                        </FormGroup>
                    </Grid2>

                    <Grid2 item size={12}>
                        <TextField onFocus={()=>handleError('ingredients','')} error={error.ingredients} helperText={error.ingredients} value={ingredients} onChange={(e)=>setIngredients(e.target.value)} label="Ingredients" fullWidth />
                    </Grid2>

                    <Grid2 item size={6} className={classes.center}>
                        <Avatar alt="Food Pic" src={foodIcon.file} sx={{ width:100,height:100}} variant="rounded" fullWidth />
                    </Grid2>

                    <Grid2 item size={6} className={classes.center}>
                        <Button style={{height:60}} variant="contained" fullWidth startIcon={<CloudUpload />} component='label'>
                            Upload Food Picture
                            <input onChange={handleFoodIconChange} type="file" multiple hidden/>
                        </Button>
                        <div className={classes.errorText}>{error.foodIcon}</div>
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

