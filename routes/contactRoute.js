const express =require('express')
const router= express.Router();

router.route('/').get((req,res)=>{
    res.status(200).json({message:'get all contacts'});
})

//thode who have id, the url should be-> http://localhost:5001/api/contacts/1
router.route('/:id').get((req,res)=>{
    res.status(200).json({message:`get specific contact of ${req.params.id}`});
})

router.route('/:id').put((req,res)=>{
    res.status(200).json({message:`put specific contact of ${req.params.id}`});
})

router.route('/').post((req,res)=>{
    res.status(200).json({message:'post contacts'});
})


router.route('/:id').delete((req,res)=>{
    res.status(200).json({message:`delete specific contact of ${req.params.id}`});
})



module.exports =router;