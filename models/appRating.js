const mongoose = require('mongoose');

const appRatingSchema = mongoose.Schema({
    appId : {type:String},
    appName : {type:String},
    overallScore : {type:Number},
    complexity : {type:String},
    rankValue : {type:Number},
    quotation : [ {type: Map, 
        of: Number}],
    status : {type:String}
  });

module.exports  = mongoose.model('appRating', appRatingSchema);