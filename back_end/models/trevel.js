const {Schema, model} =  require('mongoose');

const trevelSchema = new Schema({
    title : {
        type :String,
        required : true,
        minlength :4
    },
    image :{
        type :String,
        required : true
    } ,
    description : {
        type : String,
        required :  true

    }

})

module.exports = model('Treval', trevelSchema)