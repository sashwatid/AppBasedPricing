const mongoose = require('mongoose');

const attributeSchema = mongoose.Schema({
    attribute: {type: String},
    description : {type: String},
    multiValued : {type: Boolean},
    domainValues: {
      type: Map, 
      of: String 
    },
    weightageFactor: {type: Number}
  });

module.exports  = mongoose.model('m_attribute', attributeSchema);