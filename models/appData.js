const mongoose = require('mongoose');

const appDataSchema = mongoose.Schema({
    appId : {type:Number},
    appName : {type:String},
    srcCodeAvail : {type:String},
    appDispotn : {type:String}, 
    interfacesCount : {type:Number}, 
    reportsCount : {type:Number},
    UInReportsCount : {type:Number},
    prgmLangCount : {type:Number},
    techType : {type:String},
    nicheSkills : {type:Number},
    langSuprtCount : {type:Number},
    dataTablesCount : {type:Number},
    storedProcCount : {type:Number},
    jobsCount : {type:Number}, 
    KLOC : {type:Number}, 
    bussCritical : {type:String}, 
    usersCount : {type:Number},
    sensRegChng : {type:String},
    onsitePresReq : {type:String},
    relPYrCount : {type:Number},
    incVol : {type:Number},
    servReqVol : {type:Number},
    enhancement : {type:Number},
    suppCov : {type:Number}
});

module.exports = mongoose.model('appData',appDataSchema);
