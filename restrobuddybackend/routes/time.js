var express = require('express');
var router = express.Router();
var pool = require('./pool.js')
var multer = require('./multer.js');
const upload = require('./multer.js');

router.post('/edit_restaurent_timing',function(req,res,next){
    try { console.log(req.body)
        pool.query("insert into timing(restaurantid,status,opentime,closetime,createdat,updatedat) values(?,?,?,?,?,?)", [
          req.body.restaurantid,
          req.body.status,
          req.body.opentime,
          req.body.closetime,
          req.body.createdat,
          req.body.updatedat
        ], function (error, result) {
          if (error) {
            res.status(500).json({ data: [], message: 'Database error, pls contact database administration.....', status: false })
          }
          else {
            res.status(200).json({ message: 'Restaurant Timing Successfully Submit....', status: true })
          }
        })
      }
      catch (e) {
        res.status(500).json({ data: [], message: 'Critical error, pls contact database administration.....', status: false })
      }
})
router.post('/display_all_time',function(req,res,next){
  try
  {
    pool.query("select T.*,(select R.restaurantname from restaurant R where R.restaurantid=T.restaurantid)as restaurantname from timing T where T.restaurantid=?",[req.body.restaurantid],function(error,result){
      if(error)
        {
            res.status(500).json({data:[],message:'Database error, pls contact database administration.....',status:false})
        }
        else
        {
            res.status(200).json({data:result,message:'Successful....',status:true})
        }
    })
  }
  catch(e)
  {
    res.status(500).json({data:[],message:'Critical error, pls contact database administration.....',status:false})
  }
})

router.post('/edit_time_data',function(req,res,next){
  console.log(req.body)
  try
  {
    pool.query("update timing set restaurantid=?, status=?, opentime=?,closetime=?,updatedat=? where timeid=?",[
      req.body.restaurantid,
      req.body.status,
      req.body.opentime,
      req,body,closetime,
      req.body.updatedat,
      req.body.timeid
    ],function(error,result){
      if(error)
        { console.log("error",req.body)
          res.status(500).json({data:[],message:'Database error, pls contact database administration.....',status:false})
        }
        else
        { 
          res.status(200).json({message:'Timing Data Edited Successfully....',status:true})
        }
    })
  }
  catch(e)
  {
    res.status(500).json({data:[],message:'Critical error, pls contact database administration.....',status:false})
  }
})
router.post('/delete_data',function(req,res,next){
  console.log(req.body)
  try
  {
    pool.query("delete from timing where timeid=?",[req.body.timeid],function(error,result){
      if(error)
        { 
          res.status(500).json({data:[],message:'Database error, pls contact database administration.....',status:false})
        }
        else
        {
          res.status(200).json({message:'Time Data Deleted Successfully....',status:true})
        }
    })
  }
  catch(e)
  {
    res.status(500).json({data:[],message:'Critical error, pls contact database administration.....',status:false})
  }
})
module.exports = router;