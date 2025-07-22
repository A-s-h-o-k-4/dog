const db = require('mongoose')

const data=async () => {
    try{
        db.connect(process.env.DB_URL)
        .then(()=>console.log('db connect'))
        .catch((err)=>console.log('db not connect!'))
    }
    catch(err){
        console.log(err)
    }
}
module.exports=data;