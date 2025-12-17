import { useStyles } from "../timing/TimingInterfaceCss"
import TitleBar from "../../components/TitleBar"
import { Switch,Grid2,FormGroup,FormLabel,FormControlLabel,TextField,FormControl,InputLabel,Select,MenuItem,Button,FormHelperText} from "@mui/material"
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useState} from "react";
import { postData } from "../../../services/fetchNodeServices";
import swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
export default function TimingInterface()
{   const classes = useStyles()
    const navigate = useNavigate()
    var ADMIN=JSON.parse(localStorage.getItem('RESADMIN'))
    const [restaurantId,setRestaurantId]=useState(ADMIN.restaurantid)
    const [openClose,setOpenClose]=useState(true)
    const [statusLable,setStatusLable]= useState('Open')
    const [openTime,setOpenTime]=useState(null)
    const [closeTime,setCloseTime]=useState(null)
    const [error,setError]=useState({})
    
    //function for switch on/off
    const handleSwitchChange=(event)=>{
        const isChecked=event.target.checked
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
    

    //function for submit data
    const handleSubmit=async()=>{
        var err=validate()
        if(err==false)
        {
        var body={"restaurantid":restaurantId,
            'status':String(openClose),
            "opentime":openTime?.format("HH:mm A") || "",
            "closetime":closeTime?.format("HH:mm A") || "",
            "createdat":new Date(),
            "updatedat":new Date()
        }
        var response=await postData('time/edit_restaurent_timing',body)
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
                    handleReset()
        }
    }

    //function for submit data
    const handleReset=()=>{
        setCloseTime(null)
        setOpenTime(null)
        setOpenClose(true)
        setStatusLable('Open')
    }

    return(<div className={classes.root}>
        <div className={classes.box}>
            <TitleBar title="Restaurant Timing" url={'/shopkeeperdashboard/displayalltiming'} />
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
                    <Button onClick={handleReset} fullWidth variant="contained" >Reset</Button>
                </Grid2>
                <Grid2 size={6}>
                    <Button onClick={handleSubmit} fullWidth variant="contained" >Submit</Button>
                </Grid2>
            </Grid2>
        </div>
    </div>)
}