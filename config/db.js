const mongoose = require('mongoose');

class DBConnect{
    async connectDb(){
        try{
            mongoose.connect(process.env.DB_URI);
            console.log("DB Connected");
        }
        catch(err){
            throw err;
        }
    }
}

module.exports = new DBConnect();
