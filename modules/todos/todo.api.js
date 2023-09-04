const router = require('express').Router();
const TodoController = require('./todo.controller');


router.post('/', async(req, res, next)=>{
    try {
        const result = await TodoController.create(req.body);
        return res.json({data:result, msg:"success"});
    } catch (error) {
        next(error);
    }
})

router.get('/', async(req, res, next)=>{
    try {
        const result = await TodoController.list(req.body);
        return res.json({data:result, msg:"success"})
    } catch (error) {
        next(error)
    }
})

router.get('/:id', async(req, res, next)=>{
    try {
        const {id} = req.params;
        const result = await TodoController.getById(id, req.body);
        return res.json({data:result, msg:"success"})
    } catch (error) {
        next(error)
    }
})

router.put('/:id', async(req, res, next)=>{
    try {
        const {id} = req.params;
        const result = await TodoController.updateById(id, req.body);
        return res.json({data:result, msg:"success"})
    } catch (error) {
        next(error)
    }
})

router.patch('/:id', async(req, res, next)=>{
    try {
        const {id} = req.params;
        const result = await TodoController.updateStatus(id, req.body);
        return res.json({data:result, msg:"success"})
    } catch (error) {
        next(error)
    }
})

router.delete('/:id', async(req, res, next)=>{
    try {
        const {id} = req.params;
        const result = await TodoController.removeById(id);
        return res.json({data:result, msg:"success"})
    } catch (error) {
        next(error)
    }
})

module.exports = router;