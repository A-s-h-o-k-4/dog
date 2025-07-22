const db = require('mongoose')

const userdata = new db.Schema({
    name:{
        type : String,
        required : true
    },
    email:{
        type : String,
        required : true,
        unique : true
    },
    password:{
        type : String,
        required : true
    }
})

const schema = db.model('userdata',userdata)

module.exports = schema