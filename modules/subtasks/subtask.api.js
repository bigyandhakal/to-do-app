const router = require('express').Router();
const SubtaskController = require('./subtask.controller');

// create

router.post('/', async(req, res, next)=>{
    try {
        const result = await SubtaskController.create(req.body);
        return res.json({data:result, msg:"success"})
    } catch (error) {
        next(error)
    }
})

router.get('/', async(req, res, next)=>{
    try {
        const result = await SubtaskController.list(req.body);
        return res.json({data:result, msg:"success"})
    } catch (error) {
        next(error)
    }
})

router.get('/:id', async(req, res, next)=>{
    try {
        const {id} = req.params;
        const result = await SubtaskController.getById(id, req.body);
        return res.json({data:result, msg:"success"})
    } catch (error) {
        next(error)
    }
})

router.put('/:id', async(req, res, next)=>{
    try {
        const {id} = req.params;
        const result = await SubtaskController.updateById(id, req.body);
        return res.json({data: result, msg:"success"})
        
    } catch (error) {
        next(error)
    }
})

router.delete('/:id', async(req, res, next)=>{
    try {
        const {id} = req.params;
        const result = await SubtaskController.removebyId(id);
        return res.json({data:result, msg:"success"})
    } catch (error) {
        next(error)
    }
})

module.exports = router;