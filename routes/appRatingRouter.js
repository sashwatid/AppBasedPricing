const express = require('express');
const router = express.Router();

const appRating = require('../models/appRating');

router.post('/appRating',(req,res,next)=>{
    let newAppRating = new appRating({
        appId : req.body.appId,
        appName : req.body.appName,
        overallScore : req.body.overallScore,
        complexity : req.body.complexity,
        rankValue : req.body.rankValue,
        quotation :req.body.quotation,
        status : req.body.status
    });
    
    newAppRating.save((err, dom)=>{
        if(err) {
            res.send('error in creating appRating'+err);
        }
        else {
            res.send('appRating added successfully');
        }
    });
});

// search by appID or appName
router.get('/search/:keyword',(req,res,next)=>{
    if(req.params.keyword.length != 0) {
    var keyword = new RegExp(req.params.keyword, 'i');
    appRating.find({  $or:[
        {appId: keyword}, 
        {appName: keyword}
      ]
    }, 'appId appName complexity quotation', function(err, data){
        if(err) {
            res.send('error'+err);
        }
        else {
            if(data.length != 0)
                res.json(data);  
            else
                res.send({msg : 'No data found'});
        }
        
    })
 } else {
     res.send({msg : 'Please enter search criteria'});
}

});

module.exports = router;