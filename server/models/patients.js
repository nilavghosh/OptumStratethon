const mongoose = require('mongoose');

var PatientsSchema = new mongoose.Schema({
  Id:{
    type:String
  },
  BIRTHDATE:{
    type:String
  },
  DEATHDATE:{
    type:String
  },
  SSN:{
    type:String
  },
  DRIVERS:{
    type:String
  },
  PASSPORT:{
    type:String
  },
  PREFIX:{
    type:String
  },
  FIRST:{
    type:String,
  },
  LAST:{
    type:String
  },
  SUFFIX:{
    type:String
  },
  MAIDEN:{
    type:String
  },
  MARITAL:{
    type:String
  },
  RACE:{
    type:String
  },
  ETHNICITY:{
    type:String
  },
  GENDER:{
    type:String
  },
  BIRTHPLACE:{
    type:String
  },
  ADDRESS:{
    type:String
  },
  CITY:{
    type:String
  },
  STATE:{
    type:String
  },
  COUNTRY:{
    type:String
  },
  ZIP:{
    type:String
  },
  LAT:{
    type:String
  },
  LON:{
    type:String
  },
  HEALTHCARE_EXPENSES:{
    type:String
  }
});

var Patients = mongoose.model('patients', PatientsSchema);
module.exports = {Patients};
