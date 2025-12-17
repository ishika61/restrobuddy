import MaterialTable from "@material-table/core";
import { Avatar, Grid2,TextField,Button} from "@mui/material"
import { Dialog,DialogContent,DialogTitle,DialogActions} from "@mui/material"
import { useStyles } from "../category/CategoryInterfaceCss"
import {postData,serverURL} from "../../../services/fetchNodeServices"
import TitleBar from "../../components/TitleBar";
import { useState,useEffect } from "react";
import swal from "sweetalert2"
import { CloudUpload } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";


//main function
export default function DisplayAllCategory()
{   
    const classes = useStyles()
    const navigate = useNavigate()
    var ADMIN=JSON.parse(localStorage.getItem('RESADMIN'))
    const [restaurantId,setRestaurantId]=useState(ADMIN.restaurantid)
    const [open,setOpen] = useState()
    const [categories,setCategories] =useState([])

    // fetch all category data 
    const fetchAllCategoryData=async()=>{
        var res=await postData('category/display_all_category',{'restaurantid':restaurantId})
        setCategories(res.data)
    }
    
    // return the program after calling data
    useEffect(function(){fetchAllCategoryData()},[])
      /**************************** Category Edit states and functions************************************/

    const [categoryName,setCategoryName]=useState('')
    const [categoryId,setCategoryId]=useState('')
    const [iconPicture,setIconPicture]=useState({file:'',bytes:''})
    const [tempPicture,setTempPicture]=useState('')
    const [pictureOpen,setPictureOpen]=useState(false)
    const [buttonState,setButtonState]=useState(true)
    const [error,setError]=useState({})

      const handleDelete=()=>{
        var err=validate()
                  if(err==false)
                  {
                    swal.fire({
                        title: "Do you want to delete the category?",
                        showDenyButton: true,
                        showCancelButton: true,
                        confirmButtonText: "Delete",
                        denyButtonText: `Don't Delete`
                      }).then(async(result) => {
                        /* Read more about isConfirmed, isDenied below */
                        if (result.isConfirmed) {
                            var body={"categoryid":categoryId}
                            var response=await postData('category/delete_data',body)
                            if(response.status)
                                {fetchAllCategoryData()
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
                          swal.fire("Category not Delete", "", "info");
                        }
                        handleClose()
                        fetchAllCategoryData()
                      });
                }
      }
    // function for edit data 
    const handleEdit=async()=>{
        var err=validate()
        if(err == false)
        {
            var body={"restaurantid":restaurantId,
                "categoryname":categoryName,
                "categoryid":categoryId,
                "updatedat":new Date()}
            var response=await postData('category/edit_category_data',body)
        
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
                    fetchAllCategoryData()
        }
    }
    //check cashes aplyee
    const handleError=(label,errorMessage)=>{
        var e=error[label]=errorMessage
        setError((prev)=>({...prev,[label]:errorMessage}))
    }
    //function for validations
    const validate=()=>{
        var err=false
        if(categoryName.length==0)
        {   handleError('categoryName','Category name should not blank.....')
            err=true
        }
            return err
    }
    /*******************************************************************************************/

     //Display All Category Details****************************///////////////////************ */
     
     //for closint the edit page
    const handleClose=()=>{
       setOpen(false)
    }
     
    //fill the data in edit page
    const openDialog=(rowData)=>{
        setOpen(true)
        setCategoryName(rowData.categoryname)
        setCategoryId(rowData.categoryid)
    }

    //set all values for edit picture
    const handleEditPicture=(cid,picture)=>{
        setIconPicture({file:picture,bytes:''})
        setTempPicture(picture)
        setCategoryId(cid)
        setPictureOpen(true)
    }

    //function for change the picture on edit time
    const handlePictureChange=(event)=>{
        setIconPicture({
            file:URL.createObjectURL(event.target.files[0]),
            bytes:event.target.files[0]
        })
        setButtonState(!buttonState)
    }

    //function for show save and cancel button  
    const showSaveEditButton=()=>{
        return(<div style={{display:'flex',justifyContent:'space-between',width:400}}>
            <Button style={{marginRight:5}} onClick={handleEditImageSave} variant="contained" fullWidth>Save</Button>
            <Button style={{marginLeft:5}} onClick={handleCancel} variant="contained" fullWidth>Cancel</Button>
        </div>)
    }

    //function for don't edit picture and click the cancel button so remove the select pic and set old save pic
    const handleCancel=()=>{
        setButtonState(true)
        setIconPicture({file:tempPicture,bytes:''})
    }

    //function for close the picture edit dialog
    const handleEditPictureClose=()=>{
        setPictureOpen(false)
    }

    //edit image save function
    const handleEditImageSave=async()=>{
        var formData =new FormData()
        formData.append('categoryid',categoryId)
        formData.append('icon',iconPicture.bytes)
        var res = await postData('category/edit_category_image',formData)

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
            fetchAllCategoryData()
    }
    //main function for edit picture
    const dialogEditPicture=()=>{
        return(<div>
            <Dialog open={pictureOpen} onClose={handleEditPictureClose}>
                <DialogTitle>Edit Icon</DialogTitle>
                <DialogContent>
                    <div style={{width:400}}>
                        <Grid2 container spacing={2}>
                            <Grid2 item size={12} className={classes.center}>
                                <Avatar alt="Icon" src={iconPicture.file} sx={{width:100,height:100,marginBottom:3}} variant="rounded" />
                                {buttonState?
                                <Button variant="contained" startIcon={<CloudUpload />} component="label" fullWidth>
                                    Upload Icon
                                    <input onChange={handlePictureChange} type="file" accept="image/" multiple hidden />
                                </Button>:showSaveEditButton()}
                            </Grid2>
                        </Grid2>
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={()=>setPictureOpen(false)}>Close</Button>
                </DialogActions>
            </Dialog>
        </div>)
    }
     // edit icon table
    const displayCategoryDetails=()=>{
        return(<div>
            <Dialog open={open}>
            <DialogContent>
            <div>
        <div>
            <TitleBar title={'Edit Category Data'} />
            <Grid2 container spacing={2}>
                <Grid2 item size={12}>
                    <TextField value={restaurantId} label="Restaureat Id" fullWidth />
                </Grid2>
                <Grid2 item size={12}>
                    <TextField onFocus={()=>handleError('categoryName','')} error={error.categoryName} helperText={error.categoryName} value={categoryName} onChange={(e)=>setCategoryName(e.target.value)} label="Category Name" fullWidth />
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
                <Button onClick={handleClose}>Close</Button>
            </DialogActions>
        </Dialog>
        </div>)
    }
     // main table 
    function displayAll(){
        return(
            <MaterialTable
            title="List Of Category" 
            columns={[{title:'Category Id',render:(rowData)=><div>{rowData.categoryid}</div>},
                {title:'Restaurant Name',render:(rowData)=><div>{rowData.restaurantname}</div>},
                {title:'Category Name',render:(rowData)=><div>{rowData.categoryname}</div>},
                {title:'Picture',render:(rowData)=><div>
                    <img 
                    style={{cursor:'pointer'}} 
                    src={`${serverURL}/images/${rowData.icon}`} 
                    onClick={()=>handleEditPicture(rowData.categoryid,`${serverURL}/images/${rowData.icon}`)}
                    title="Icon"
                    className={classes.pic_styale} />
                </div>}
            ]}
            data={categories}  //colect data and store data in rowData      
            actions={[
              {
                icon: 'edit',
                tooltip: 'Edit Category Details',
                onClick: (event, rowData) => openDialog(rowData)
              },
              {
                icon: 'add',
                isFreeAction:true,
                tooltip: 'Add new Category',
                onClick: (event, rowData) => navigate('/shopkeeperdashboard/categoryinterface')
              }
            ]}
            />
        )
    }

    //main function return
    return(<div className={classes.root}>
        <div className={classes.display_box}>
            {displayAll()}
            {displayCategoryDetails()}
            {dialogEditPicture()}
        </div>
    </div>)
}