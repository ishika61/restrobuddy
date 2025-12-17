import MaterialTable from "@material-table/core";
import { getData,postData,serverURL } from "../../../services/fetchNodeServices";
import { useState,useEffect } from "react";
import { useStyles } from "./RestaurantInterfaceCss"
import { Dialog,DialogContent,DialogTitle,DialogActions } from "@mui/material"
import {Avatar, Grid2,TextField,FormControl,InputLabel,Select,MenuItem,Button,FormHelperText} from "@mui/material"
import TitleBar from "../../components/TitleBar";
import { CloudUpload } from "@mui/icons-material";
import swal from "sweetalert2"
import { useNavigate } from "react-router-dom";

export default function DisplayAllRestaurant()
{   const classes = useStyles();
    const navigate = useNavigate()
        const [restaurantId,setRestaurantsId]=useState('')
        const [restaurants,setRestaurants]=useState([])
        const [open,setOpen]=useState(false)
        
        /****************Restaurant States***************/
        


        const [states,setStates]=useState([])
        const [city,setCity]=useState([])
        const [restaurantName,setRestaurantName]=useState('') 
        const [ownerName,setOwnerName]=useState('')
        const [phoneNumber,setPhoneNumber]=useState('')
        const [emailId,setEmailId]=useState('')
        const [mobileNumber,setMobileNumber]=useState('')
        const [url,setURL]=useState('')
        const [fssai,setFssai]=useState('')
        const [gstNo,setGstNo]=useState('')
        const [gstType,setGstType]=useState('')
        const [avrageCost, setAvrageCost]=useState('')
        const [address,setAddress]=useState('')
        const [latLong,setLatLong]=useState('')
        const [stateId,setStateId]=useState('')
        const [cityId,setCityId]=useState('')
        const [error,setError]=useState({})
        const [pictureOpen,setPictureOpen]=useState(false)
        const [editPicture,setEditPicture]=useState({file:'',bytes:''})
        const [buttonState,setButtonState]=useState(true)
        const [tempPicture,setTempPicture]=useState('')
        const [title,setTitle]=useState('')
        // Picture Edit Function
        const handleEditImage=async()=>{
          var formData=new FormData()
          formData.append('restaurantid',restaurantId)
          formData.append('picture',editPicture.bytes)
          formData.append('whichimage',title)
          var res=await postData('restaurant/edit_restaurant_images',formData)
          if(res.status)
                  {
                      swal.fire({
                          icon: "success",
                          title: res.message,
                          showConfirmButton: false,
                          timer: 3000
                        });
                  }
                  else
                  {
                      swal.fire({
                          icon: "error",
                          title: res.message,
                          showConfirmButton: false,
                          timer: 3000
                        });
                  }
                  setButtonState(!buttonState)
                  handleEditPictureClose()
                  fetchAllRestaurant()
                  
          
        }
        const showSaveEditButton=()=>{
          return(<div  style={{display:'flex',justifyContent:'space-between',width:400}}>
            <Button style={{marginRight:5}} onClick={handleEditImage} variant="contained" fullWidth>Save</Button>
            <Button style={{marginLeft:5}} onClick={handleCancel} variant="contained" fullWidth>Cancel</Button>
          </div>)
        }
        const handleCancel=()=>{
          setButtonState(true)
          setEditPicture({file:tempPicture,bytes:''})
        }
        const handleEditPicture=(rid,Picture,title)=>{
          setEditPicture({file:Picture,bytes:''})
          setTempPicture(Picture)
          setRestaurantsId(rid)
          setTitle(title)
          setPictureOpen(true)
          
        }
        const handleEditPictureClose=()=>{
          setPictureOpen(false)
        }
        const handlePictureChange = (event) =>{
          setEditPicture({
            file:URL.createObjectURL(event.target.files[0]),
            bytes:event.target.files[0],
          })
          setButtonState(!buttonState)
        }
        const dialogEditPicture=()=>{ 
          return <div>
            <Dialog open={pictureOpen} onClose={handleEditPictureClose}>
              <DialogTitle>Edit {title}</DialogTitle>
              <DialogContent>
                <div style={{width:400,}}>
                <Grid2 container spacing={2}>
                  <Grid2 item size={12} className={classes.center}>
                    <Avatar alt="fssai" src={editPicture.file} sx={{ width: 100, height: 100, marginBottom:3 }} variant="rounded"/>
                    {buttonState?
                    <Button variant="contained" startIcon={<CloudUpload />} component="label" fullWidth>
                      Upload Picture
                      <input onChange={handlePictureChange}  type="file" accept="image/*" multiple hidden/>
                    </Button>:showSaveEditButton()}
                  </Grid2>
                </Grid2>
                </div>
              </DialogContent>
              <DialogActions>
                <Button onClick={()=>setPictureOpen(false)}>Close</Button>
              </DialogActions>
            </Dialog>
          </div>
        }
        
        //check cashes aplyee
        const handleError=(label,errorMessage)=>{
            var e=error[label]=errorMessage
            setError((prev)=>({...prev,[label]:errorMessage}))
        }
        const validate=()=>{
            var err=false
            if(restaurantName.length==0)
            { handleError('restaurantName','Restaurant name should not blank.....')
              err=true
            }
            if(ownerName.length==0)
            { handleError('ownerName','Owner name should not blank.....')
              err=true
            }
            if(address.length==0)
            { handleError('address','Address should not blank.....')
              err=true
            }
            if(stateId.length==0)
            { handleError('stateId','Pls select state.....')
              err=true
            }
            if(cityId.length==0)
                { handleError('cityId','Pls select city.....')
                  err=true
                }
            if(latLong.length==0)
            { handleError('latLong','Lat Long should not blank.....')
              err=true
            }
            if(phoneNumber.length==0)
            { handleError('phoneNumber','Phone Number should not blank.....')
              err=true
            }
            if(fssai.length==0)
            { handleError('fssai','fssai should not blank.....')
              err=true
            }
            if(gstType.length==0)
            { handleError('gstType','Pls select Gst type.....')
              err=true
            }
            if (avrageCost.length == 0) {
            handleError('avrageCost', 'Pls Enter AvrageCost type.....')
            err = true
            }

            //check conditions
            var url_pattern=/^[http://|https://]+[^\s]+\.[^\s]{2,}/g
            if(!url_pattern.test(url))
            {
                handleError("url","Pls input valid url....")
                err=true
            }
            var email_pattern=/^[A-za-z0-9._-]+[@]{1}[A-za-z0-9]{1,256}\.[^\s]{2,}/g
            if(!email_pattern.test(emailId))
            {
                handleError("emailId","Pls input valid Email Id....")
                err=true
            }
            var Mobile_pattern=/^[0-9]{10}$/
            if(!Mobile_pattern.test(mobileNumber))
            {
                handleError("mobileNumber","Pls input valid Mobile number....")
                err=true
            }
            var gst_pattern=/^[0-9]{15}$/
            if(!gst_pattern.test(gstNo))
            {
                handleError("gstNo","Pls input valid gst number....")
                err=true
            }
            return err
        }
    
        //fetch All state
        const fetchAllStates=async()=>{
            var response=await getData("statecity/fetch_all_state")
            setStates(response.data)
        }
        //fetch all city
        const fetchAllCities=async(stateid)=>{
            var response=await postData("statecity/fetch_all_city",{stateid:stateid})
            setCity(response.data)
        }
    
        useEffect(function(){
        fetchAllStates()
        },[])
        
        const handleStateChange=(event)=>{
            setStateId(event.target.value)
            fetchAllCities(event.target.value)
        }
        const fillStates=()=>{
            return states.map((item)=>{
                return <MenuItem value={item.stateid}>{item.statename}</MenuItem>
            })
        }
        const fillCities=()=>{
            return city.map((item)=>{
                return <MenuItem value={item.cityid}>{item.cityname}</MenuItem>
            })
        }
  
        //submit the all record function
        const handleEdit=async()=>{
            var err = validate()
            if(err == false)
            {
            var body={"restaurantname":restaurantName,"ownername":ownerName,"phonenumber":phoneNumber,"emailid":emailId,"mobilenumber":mobileNumber,
            "url":url,"fssai":fssai,"gstno":gstNo,"gsttype":gstType,"address":address,"avragecost":avrageCost,"stateid":stateId,"cityid":cityId,"latlong":latLong,
            "createdat":new Date(),"updatedat":new Date(),restaurantid:restaurantId}
            var response=await postData('restaurant/edit_restaurant_data',body)
            
            if(response.status)
            {
                swal.fire({
                    icon: "success",
                    title: response.message,
                    showConfirmButton: false,
                    timer: 3000
                  });

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
            handleClose()
            fetchAllRestaurant()
            }
            
        }
        const handleDelete=async()=>{
          var err=validate()
          if(err==false)
          {
            swal.fire({
                title: "Do you want to delete the restaurant?",
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: "Delete",
                denyButtonText: `Don't Delete`
              }).then(async(result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    var body={"restaurantid":restaurantId}
                    var response=await postData('restaurant/delete_data',body)
                    if(response.status)
                        {fetchAllRestaurant()
                  swal.fire("Deleted!", "", "success");
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
                else if (result.isDenied) {
                  swal.fire("Restaurent not Delete", "", "info");
                }
              });
          }
          
      }
        /*************************************************/
        const handleClose=()=>{
          setOpen(false)
        }
        //******Fill the Data********/
        const openDialog=(rowData)=>{
          setOpen(true)
          setRestaurantsId(rowData.restaurantid)
          fetchAllCities(rowData.stateid)
          setRestaurantName(rowData.restaurantname)
          setOwnerName(rowData.ownername)
          setURL(rowData.url)
          setAddress(rowData.address)
          setLatLong(rowData.latlong)
          setMobileNumber(rowData.mobilenumber)
          setPhoneNumber(rowData.phonenumber)
          setEmailId(rowData.emailid)
          setFssai(rowData.fssai)
          setGstNo(rowData.gstno)
          setStateId(rowData.stateid)
          setCityId(rowData.cityid)
          setGstType(rowData.gsttype)
          setAvrageCost(rowData.avragecost)
          setEditPicture('')
        }
        //Dialog 
        const displayRestaurantDetails=()=>{
          return(<div>
            <Dialog open={open} onClose={handleClose}>
              <DialogContent>
                <div>
                            <div>
                                <TitleBar title={"Edit Restaurant"} />
                                <Grid2 container spacing={2}>
                                    <Grid2 item size={4}>
                                        <TextField onFocus={()=>handleError('restaurantName','')} error={error.restaurantName} helperText={error.restaurantName} value={restaurantName} onChange={(e)=>setRestaurantName(e.target.value)} label="Restaurant Name" fullWidth/>
                                    </Grid2>
                                    <Grid2 item size={4}>
                                        <TextField onFocus={()=>handleError('ownerName','')} error={error.ownerName} helperText={error.ownerName} value={ownerName} onChange={(e)=>setOwnerName(e.target.value)} label="Owner Name" fullWidth/>
                                    </Grid2>
                                    <Grid2 item size={4}>
                                        <TextField onFocus={()=>handleError('url','')} error={error.url} helperText={error.url}  value={url} onChange={(e)=>setURL(e.target.value)} label="Website URL" fullWidth/>
                                    </Grid2>
                
                                    <Grid2 item size={8}>
                                        <TextField onFocus={()=>handleError('address','')} error={error.address} helperText={error.address} value={address} onChange={(e)=>setAddress(e.target.value)} label="Address" fullWidth/>
                                    </Grid2>

                                    <Grid2 item size={4}>
                                        <TextField onFocus={()=>handleError('avrageCost','')} error={error.avrageCost} helperText={error.avrageCost} value={avrageCost} onChange={(e)=>setAvrageCost(e.target.value)} label="Avrage Cost For Two" fullWidth/>
                                    </Grid2>
                
                                    <Grid2 item size={4}>
                                        <FormControl fullWidth error={error.stateId}>
                                            <InputLabel>State</InputLabel>
                                            <Select value={stateId} onFocus={()=>handleError('stateId','')} onChange={handleStateChange} label='State'>
                                                {fillStates()}
                                            </Select>
                                            <FormHelperText>{error.stateId}</FormHelperText>
                                        </FormControl>
                                    </Grid2>
                                    <Grid2 item size={4}>
                                        <FormControl fullWidth error={error.cityId}>
                                            <InputLabel>City</InputLabel>
                                            <Select value={cityId} onFocus={()=>handleError('cityId','')} onChange={(e)=>setCityId(e.target.value)} label='City'>
                                                {fillCities()}
                                            </Select>
                                            <FormHelperText>{error.cityId}</FormHelperText>
                                        </FormControl>
                                    </Grid2>
                                    <Grid2 item size={4}>
                                        <TextField onFocus={()=>handleError('latLong','')} error={error.latLong} helperText={error.latLong} value={latLong} onChange={(e)=>setLatLong(e.target.value)} label="Latitude/Longintude" fullWidth/>
                                    </Grid2>
                
                                    <Grid2 item size={4}>
                                        <TextField onFocus={()=>handleError('mobileNumber','')} error={error.mobileNumber} helperText={error.mobileNumber} value={mobileNumber} onChange={(e)=>setMobileNumber(e.target.value)} label="Mobile Number" fullWidth/>
                                    </Grid2>
                                    <Grid2 item size={4}>
                                        <TextField onFocus={()=>handleError('phoneNumber','')} error={error.phoneNumber} helperText={error.phoneNumber} value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)} label="Phone Number" fullWidth />
                                    </Grid2>
                                    <Grid2 item size={4}>
                                        <TextField onFocus={()=>handleError('emailId','')} error={error.emailId} helperText={error.emailId} value={emailId} onChange={(e)=>setEmailId(e.target.value)} label="Email Address" fullWidth/>
                                    </Grid2>
                                    
                                    <Grid2 item size={4}>
                                        <TextField onFocus={()=>handleError('fssai','')} error={error.fssai} helperText={error.fssai} value={fssai} onChange={(e)=>setFssai(e.target.value)} label="Fssai Number" fullWidth/>
                                    </Grid2>
                                    <Grid2 item size={4}>
                                        <TextField onFocus={()=>handleError('gstNo','')} error={error.gstNo} helperText={error.gstNo} value={gstNo} onChange={(e)=>setGstNo(e.target.value)} label="GST Number" fullWidth/>
                                    </Grid2>
                                    <Grid2 item size={4}>
                                        <FormControl fullWidth error={error.gstType}>
                                            <InputLabel>GST Type</InputLabel>
                                            <Select value={gstType} onFocus={()=>handleError('gstType','')} onChange={(e)=>setGstType(e.target.value)} label='GST Type'>
                                                <MenuItem value="5">Non Grade</MenuItem>
                                                <MenuItem value="18">3 Star</MenuItem>
                                                <MenuItem value="28">5 Star</MenuItem>
                                            </Select>
                                            <FormHelperText>{error.gstType}</FormHelperText>
                                        </FormControl>
                                    </Grid2>
                                    <Grid2 size={6}>
                                        <Button onClick={handleDelete} fullWidth variant="contained" >Delete</Button>
                                    </Grid2>
                                    <Grid2 size={6}>
                                        <Button onClick={handleEdit} fullWidth variant="contained" >Edit</Button>
                                    </Grid2>
                                </Grid2>
                            </div>
                        </div>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>close</Button>
              </DialogActions>
            </Dialog>
          </div>)
        }
        const fetchAllRestaurant=async()=>{
            var res=await getData('restaurant/display_all')
            setRestaurants(res.data)
        }
        useEffect(function(){fetchAllRestaurant()},[])
        function displayAll() {
        return (
          <MaterialTable 
            title="List Of Restaurant"
            columns={[
                {title:'Id',field:'restaurantid'},
                {title:'Name',render:(rowData)=><div><div>{rowData.restaurantname}</div><div>{rowData.ownername}</div><div>{rowData.url}</div></div>},
                {title:'Address',render:(rowData)=><div><div>{rowData.address}</div><div>{rowData.cityname},{rowData.statename}</div><div>{rowData.latlong}</div></div>},
                {title:'Contact',render:(rowData)=><div><div>{rowData.emailid}</div><div>{rowData.mobilenumber},{rowData.phonenumber}</div></div>},
                {title:'Licenses',render:(rowData)=><div><div><b>Avg Cost:</b>{rowData.avragecost}</div><div><b>Fssai:</b>{rowData.fssai}</div><div><b>GstNo:</b>{rowData.gstno}</div><div><b>Gst Type:</b>{rowData.gsttype}</div></div>},
                {title:'Picture',render:(rowData)=><div>
                  <img 
                  style={{cursor:'pointer'}} 
                  onClick={()=>handleEditPicture(rowData.restaurantid,`${serverURL}/images/${rowData.filefssai}`,"Fssai")} 
                  title="Fssai" 
                  src={`${serverURL}/images/${rowData.filefssai}`} 
                  className={classes.picstyle} 
                  />
                  
                  <img style={{cursor:'pointer'}} 
                  onClick={()=>handleEditPicture(rowData.restaurantid,`${serverURL}/images/${rowData.fileshopact}`,"Shop Act")} 
                  title="ShopAct" 
                  src={`${serverURL}/images/${rowData.fileshopact}`} 
                  className={classes.picstyle} 
                  />
                  
                  <img style={{cursor:'pointer'}} 
                  onClick={()=>handleEditPicture(rowData.restaurantid,`${serverURL}/images/${rowData.filelogo}`,"Logo",)} 
                  src={`${serverURL}/images/${rowData.filelogo}`}
                  title="Logo"
                  className={classes.picstyle} 
                  />
                </div>}
            ]}
            data={restaurants}        
            actions={[
              {
                icon: 'edit',
                tooltip: 'Edit Restaurant Details',
                onClick: (event, rowData) => openDialog(rowData)
              },
              {
                icon: 'add',
                isFreeAction:true,
                tooltip: 'Add new Restaurant',
                onClick: (event, rowData) => navigate('/admindashboard/restaurantinterface')
              }
            ]}
          />
        )
      }
      return(<div className={classes.root}>
        <div className={classes.display_box}>
            {displayAll()}
            {displayRestaurantDetails()}
            {dialogEditPicture()}
        </div>
      </div>)
}