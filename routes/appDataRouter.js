const express = require('express');
const router = express.Router();

const appData = require('../models/appData');

// to get list of all attributes
router.get('/appDatas',(req,res,next)=>{
    appData.find(function(err, attributes){
        res.json(attributes); 
    })
});

// to get a single attribute, search functionality
router.get('/appData/:appId',(req,res,next)=>{
    appData.find({appId:req.params.appId}, function(err, data){
        if(err) {
            res.send('error'+err);
        }
        else {
            res.json(data[0]);  
        }
        
    })
});

// to add an attribute into mongo db
router.post('/appData',(req,res,next)=>{
    let newAppData = new appData({
        appId : req.body.appId,
        appName : req.body.appName,
        srcCodeAvail : req.body.SrcCodeAvail,
        appDispotn : req.body.AppDispotn, 
        interfacesCount : req.body.InterfacesCount, 
        reportsCount : req.body.ReportsCount,
        UInReportsCount : req.body.UInReportsCount,
        prgmLangCount : req.body.PrgmLangCount,
        techType : req.body.TechType,
        nicheSkills : req.body.NicheSkills,
        langSuprtCount : req.body.LangSuprtCount,
        dataTablesCount : req.body.DataTablesCount,
        storedProcCount : req.body.StoredProcCount,
        jobsCount : req.body.JobsCount, 
        KLOC : req.body.KLOC, 
        bussCritical : req.body.BussCritical, 
        usersCount : req.body.UsersCount,
        sensRegChng : req.body.SensRegChng,
        onsitePresReq : req.body.OnsitePresReq,
        relPYrCount : req.body.RelPYrCount,
        incVol : req.body.IncVol,
        servReqVol : req.body.ServReqVol,
        enhancement : req.body.Enhancement,
        suppCov : req.body.SuppCov

    });
    
    newAppData.save((err, attribute)=>{
        if(err) {
            res.json({msg:'error in creating app data', error:err});
        }
        else {
            res.send({msg:'app data added successfully'});
        }
    });
});

// to remove an attribute
router.delete('/removeAttr/:id',(req,res,next)=>{
    appData.remove({_id:req.params.id},function(err,result){
        if(err) {
            res.json(err);
        }
        else {
            res.json(result);
        }
    });
});


module.exports = router;
