var express = require('express');
var router = express.Router();
var pool=require('./pool.js')
var multer=require('./multer.js');
const upload = require('./multer.js');


router.post('/submit_restaurant',upload.any(), function(req, res, next) {
    console.log("body",req.body)
    // console.log("Files:",req.files)
    try
  { 
    pool.query("insert into restaurant( restaurantname, ownername, phonenumber, emailid, mobilenumber, url, fssai, gstno, gsttype, filefssai, fileshopact, filelogo, address, avragecost, stateid, cityid, latlong, password, status, createdat, updatedat) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",[
      req.body.restaurantname, 
      req.body.ownername, 
      req.body.phonenumber, 
      req.body.emailid, 
      req.body.mobilenumber, 
      req.body.url, 
      req.body.fssai, 
      req.body.gstno, 
      req.body.gsttype, 
      req.files[0].filename, 
      req.files[1].filename, 
      req.files[2].filename, 
      req.body.address,
      req.body.avragecost, 
      req.body.stateid, 
      req.body.cityid, 
      req.body.latlong, 
      req.body.password, 
      req.body.status, 
      req.body.createdat, 
      req.body.updatedat
    
    ],function(error,result){
      if(error)
      { 
        res.status(500).json({data:[],message:'Database error, pls contact database administration.....',status:false})
      }
      else
      {
        res.status(200).json({message:'Restaurant Successfully Registerd....',status:true})
      }
    })
  }
  catch(e)
  { 
    res.status(500).json({data:[],message:'Critical error, pls contact database administration.....',status:false})
  }
});
router.get('/display_all',function(req,res){
  try
  {
    pool.query("Select R.*,(select S.statename from states S where S.stateid=R.stateid) as statename,(select C.cityname from city C where C.cityid=R.cityid) as cityname from restaurant R",function(error,result){
      if(error)
      { 
        res.status(500).json({data:[],message:'Database error, pls contact database administration.....',status:false})
      }
      else
      {
        res.status(200).json({message:'Success....',data:result,status:true})
      }
    })
  }
  catch(e)
  {
    res.status(500).json({data:[],message:'Critical error, pls contact database administration.....',status:false})
  }
})
router.post('/edit_restaurant_data',function(req, res, next) {
     
  try
{ 
  pool.query("update restaurant set restaurantname=?, ownername=?, phonenumber=?, emailid=?, mobilenumber=?, url=?, fssai=?, gstno=?, gsttype=?, address=?, avragecost=?, stateid=?, cityid=?, latlong=?, createdat=?, updatedat=? where restaurantid=?",[
    req.body.restaurantname, 
    req.body.ownername, 
    req.body.phonenumber, 
    req.body.emailid, 
    req.body.mobilenumber, 
    req.body.url, 
    req.body.fssai, 
    req.body.gstno, 
    req.body.gsttype, 
    req.body.address,
    req.body.avragecost, 
    req.body.stateid, 
    req.body.cityid, 
    req.body.latlong,  
    req.body.createdat, 
    req.body.updatedat,
    req.body.restaurantid
  ],function(error,result){
    if(error)
    { console.log(error)
      res.status(500).json({data:[],message:'Database error, pls contact database administration.....',status:false})
    }
    else
    {
      res.status(200).json({message:'Restaurant Data Edited Successfully....',status:true})
    }
  })
}
catch(e)
{ 
  res.status(500).json({data:[],message:'Critical error, pls contact database administration.....',status:false})
}
});

router.post('/delete_data',function(req, res, next) {
try
{ 
pool.query("delete from restaurant where restaurantid=?",[req.body.restaurantid],function(error,result){
if(error)
{ 
  res.status(500).json({data:[],message:'Database error, pls contact database administration.....',status:false})
}
else
{
  res.status(200).json({message:'Restaurant Data Deleted Successfully....',status:true})
}
})
}
catch(e)
{ 
res.status(500).json({data:[],message:'Critical error, pls contact database administration.....',status:false})
}
});

router.post('/edit_restaurant_images',upload.single('picture'),function(req, res, next) {
  // console.log(req.body)
  // console.log(req.file)
  try
  { q=""
    if(req.body.whichimage=='Fssai')
    { q="update restaurant set filefssai=? where restaurantid=?"}
    else if(req.body.whichimage=='Shop Act')
      { q="update restaurant set fileshopact=? where restaurantid=?"}
    else if(req.body.whichimage=='Logo')
      { q="update restaurant set filelogo=? where restaurantid=?"}
  pool.query(q,[req.file.filename,req.body.restaurantid],function(error,result){
  if(error)
  { 
    res.status(500).json({data:[],message:'Database error, pls contact database administration.....',status:false})
  }
  else
  {
    res.status(200).json({message:`Restaurant ${req.body.whichimage} image edited Successfully....`,status:true})
  }
  })
  }
  catch(e)
  { 
  res.status(500).json({data:[],message:'Critical error, pls contact database administration.....',status:false})
  }
  });

  router.post('/check_resadmin_login', function (req, res, next) {
    // console.log("try:", req.body)
    try {
      pool.query("select * from restaurant where (emailid=? or mobilenumber=?) and password=?",[req.body.emailid,req.body.emailid,req.body.password],function (error, result) {
        if (error) {
          res.status(500).json({ data: [], message: 'Database error, pls contact database administration.....', status: false })
        }
        else {
              if(result.length==1)
                {
                  var {password,...data}=result[0]  
                  //console.log("Selected Data:",data)
                  res.status(200).json({data,message:'Successfull',status:true})
                }
              else
                  res.status(200).json({data:[],message:'Invalid Adminid/Password',status:false})
        }
      })
    }
    catch (e) {
      res.status(500).json({ data: [], message: 'Invalid Admin/Password', status: false })
    }
})
  
module.exports = router;