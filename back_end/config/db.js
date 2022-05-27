const mongoose = require('mongoose');

const connectDB = async () => {
            try {
                const conn = mongoose.connect(process.env.MONGO_DB_URL, {
                    // userNewUrlParser :  true
                })
                console.log(`mongodb connected` );

    } catch(err){
        console.log(err)
    } 

}


module.exports = connectDB