const express = require('express');
const router = express.Router();

const attributes = require('../models/attribute');

router.post('/attribute',(req,res,next)=>{
    let newAttribute = new attributes({
        domainValues : {
            3: req.body.band3,
            2: req.body.band2,
            1: req.body.band1
        },
        weightageFactor : req.body.factor,
        attribute : req.body.attr,
        description : req.body.description,
        multiValued : req.body.multiValued
    });
    
    newAttribute.save((err, dom)=>{
        if(err) {
            res.send('error in creating documents for m_attribute'+err);
        }
        else {
            res.send('attribute added successfully');
        }
    });
});

router.get('/attribute/:attr',(req,res,next)=>{
    attributes.find({attribute:req.params.attr}, function(err, doc){
        if(err) {
            res.send('error'+err);
        }
        else {
            
            res.json(doc[0].domainValues);  
            
        }
        
    })
});

module.exports = router;