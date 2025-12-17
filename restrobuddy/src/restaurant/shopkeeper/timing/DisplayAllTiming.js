import MaterialTable from "@material-table/core";
import { Switch,Grid2,FormGroup,FormLabel,FormControlLabel,TextField,FormControl,InputLabel,Select,MenuItem,Button,FormHelperText} from "@mui/material"
import { Dialog,DialogContent,DialogActions} from "@mui/material"
import { useStyles } from "../timing/TimingInterfaceCss"
import {postData} from "../../../services/fetchNodeServices"
import TitleBar from "../../components/TitleBar";
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useState,useEffect } from "react";
import swal from "sweetalert2"
import { useNavigate } from "react-router-dom";


//main function
export default function DisplayAllTiming()
{   
    const classes = useStyles()
    const navigate = useNavigate()
    var ADMIN=JSON.parse(localStorage.getItem('RESADMIN'))
    const [restaurantId,setRestaurantId]=useState(ADMIN.restaurantid)
    const [open,setOpen] = useState(false)
    const [times,setTimes] =useState([])

    // fetch all Time data 
    const fetchAllTimeData=async()=>{
        var res=await postData('time/display_all_time',{'restaurantid':restaurantId})
        setTimes(res.data)
    }
    
    // return the program after calling data
    useEffect(function(){fetchAllTimeData()},[])
      /**************************** Time Edit states and functions************************************/

    const [timeId,setTimeId]=useState('')
    const [openClose,setOpenClose]=useState(true)
    const [statusLable,setStatusLable]= useState('Open')
    const [openTime,setOpenTime]=useState(null)
    const [closeTime,setCloseTime]=useState(null)
    const [error,setError]=useState({})
    
    //function for switch on/off
    const handleSwitchChange=(event)=>{
        const isChecked = event.target.checked
        setOpenClose(isChecked)
        setStatusLable(isChecked? "Open" : "Close")
    }

    const handleError=(label,errorMessage)=>{
        var e=error[label]=errorMessage
        setError((prev)=>({...prev,[label]:errorMessage}))
    }
    //function for validations
    const validate=()=>{
        var err=false

        if(openClose==true)
        {
            if(closeTime==null)
            {   handleError('closeTime','closeTime should not blank.....')
                err=true
            }
            if(openTime==null)
            {   handleError('openTime','openTime should not blank.....')
                err=true
            }
        }
            return err
    }

    //function for disable/inable timing text box
    const showTimeTextBox=()=>{
        return(<div >
                <Grid2 size={6}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <TimePicker label="Restaurant Open Timing" onFocus={()=>handleError('openTime','')} value={openTime} onChange={(newValue)=>setOpenTime(newValue)}/>
                            <div className={classes.errorText}>{error.openTime}</div>
                    </LocalizationProvider>
                </Grid2>
                <Grid2 size={6}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <TimePicker label="Restaurant Close Timing" onFocus={()=>handleError('closeTime','')} helperText={error.restaurantId} value={closeTime} onChange={(newValue)=>setCloseTime(newValue)}/>
                            <div className={classes.errorText}>{error.closeTime}</div>
                    </LocalizationProvider>
                </Grid2>
        </div>)
    }

    const handleDelete=()=>{
        var err=validate()
                  if(err==false)
                  {
                    swal.fire({
                        title: "Do you want to delete the Time?",
                        showDenyButton: true,
                        showCancelButton: true,
                        confirmButtonText: "Delete",
                        denyButtonText: `Don't Delete`
                      }).then(async(result) => {
                        /* Read more about isConfirmed, isDenied below */
                        if (result.isConfirmed) {
                            var body = {'timeid':timeId}
                            var response=await postData('time/delete_data',body)
                            if(response.status)
                                {fetchAllTimeData()
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
                        fetchAllTimeData()
                      });
                }
      }
    // function for edit data 
    const handleEdit=async()=>{
        var err=validate()
        if(err == false)
        {
            var body={"restaurantid":restaurantId,
                "updatedat":new Date()}
            var response=await postData('time/edit_time_data',body)
        
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
                    fetchAllTimeData()
        }
    }
    /*******************************************************************************************/

     //Display All Time Details****************************///////////////////************ */
     
     //for closint the edit page
    const handleClose=()=>{
       setOpen(false)
    }
     
    //fill the data in edit page
    const openDialog=(rowData)=>{
        const statusValue=rowData.status === "true"
        setOpen(true)
        setCloseTime(rowData.closetime)
        setTimeId(rowData.timeid)
        setOpenClose(statusValue)
        setStatusLable(statusValue? "Open" : "Close")
    }

     // edit icon table
    const displayTimeDetails=()=>{
        return(<div>
            <Dialog open={open}>
            <DialogContent>
            <div>
        <div>
            <TitleBar title="Restaurant Timing" />
            <Grid2 container spacing={2}>
                <Grid2 item size={12}>
                    <TextField value={restaurantId} fullWidth label="Restaurant Id"/>
                </Grid2>
                <Grid2 item size={12}>
                    <FormGroup>
                        <FormLabel>Status</FormLabel>
                        <FormControlLabel
                            control={<Switch checked={openClose} onChange={handleSwitchChange} />}
                            label={statusLable}
                        />
                    </FormGroup>
                </Grid2>
                <Grid2 item size={12}>
                    {!openClose? <b></b> : showTimeTextBox()  }
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
            title="List Of Timing" 
            columns={[{title:'Id',render:(rowData)=><div>{rowData.timeid}</div>},
                {title:'Reastaurant Id',render:(rowData)=><div>{rowData.restaurantname}</div>},
                {title:'Status',render:(rowData)=><div>{rowData.status=='true'? "Open" : "Close"}</div>},
                {title:'Open Time',render:(rowData)=><div>{rowData.opentime}</div>},
                {title:'Close Time',render:(rowData)=><div>{rowData.closetime}</div>}
            ]}
            data={times}  //colect data and store data in rowData      
            actions={[
              {
                icon: 'edit',
                tooltip: 'Edit Time Details',
                onClick: (event, rowData) => openDialog(rowData)
              },
              {
                icon: 'add',
                isFreeAction:true,
                tooltip: 'Add new Time',
                onClick: (event, rowData) => navigate('/shopkeeperdashboard/timinginterface')
              }
            ]}
            />
        )
    }

    //main function return
    return(<div className={classes.root}>
        <div className={classes.display_box}>
            {displayAll()}
            {displayTimeDetails()}
        </div>
    </div>)
}