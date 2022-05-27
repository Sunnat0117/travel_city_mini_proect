const Treval = require('../models/trevel')

// method : get
// description :  to get all trevels
const getAllTrevels = async (req, res) => {

    const trevels = await Treval.find();
    res.status(200).json({
        message: "succuss",
        trevels: trevels.reverse()
    })

}

// method : get
// description :  to get  trevel by id
const getTrevelById = async (req, res) => {

    const trevel = await Treval.findById(req.params.id);

    if (!trevel) {
        return res.status(404).json({
            message: ' not found',

        })
    }
    return res.status(200).json({
        message: 'success',
        trevel,
    })
}


// method : post
// description :  add new trevel
const addNewTrevel = async (req, res) => {
    try {
        const {
            title,
            image,
            description
        } = req.body;
        const newTreval = await Treval.create({
            title,
            image,
            description
        });

        res.status(201).json({
            message: "cretated new trevel book",
            newTreval
        });

    } catch (err) {
        console.log(err);
    }
}


// UPDATE
// edit trevel book

const upateTrevelBook = async (req, res) => {
    const {
        title,
        image,
        description
    } = req.body;

    const updatedTrevel = await Treval.findByIdAndUpdate(req.params.id, {
        title,
        image,
        description
    });


    res.status(200).json({
        message: "updated the trevelBook",
        updatedTrevel,
    })
}


//DELETE 
// removing some book by id


const deleteTrevelBook = async (req, res) => {
    const removedBook = await Treval.findByIdAndRemove(req.params.id)
        .exec()
        .then(result => {
            res.status(200).json({
                message: "deleted",
                removedBook

            })

        }).catch(err => {
            res.status(404).json({
                error: err
            })
        })
};



module.exports = {
    getAllTrevels,
    getTrevelById,
    addNewTrevel,
    deleteTrevelBook,
    upateTrevelBook

}