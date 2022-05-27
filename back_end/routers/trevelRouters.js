const {Router}=  require('express');
const router = Router();
const {
       getAllTrevels,
       getTrevelById,
       addNewTrevel,
       deleteTrevelBook,
       upateTrevelBook
} =  require ("../controllers/trevelController");

//CRUD 
router.get('/', getAllTrevels ) 
router.get('/:id', getTrevelById)
router.post('/add', addNewTrevel)
router.delete('/:id', deleteTrevelBook),
router.put('/:id', upateTrevelBook )



module.exports = router;