const router = require("express").Router();
const SubtaskController = require("./subtask.controller");

// create

router.post("/", async (req, res, next) => {
  try {
    const result = await SubtaskController.create(req.body);
    return res.json({ data: result, msg: "success" });
  } catch (error) {
    next(error);
  }
});

// get all data

router.get("/", async (req, res, next) => {
  try {
    const result = await SubtaskController.list(req.body);
    return res.json({ data: result, msg: "success" });
  } catch (error) {
    next(error);
  }
});


//get data by id
router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await SubtaskController.getById(id, req.body);
    return res.json({ data: result, msg: "success" });
  } catch (error) {
    next(error);
  }
});


//update data by id
router.put("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await SubtaskController.updateById(id, req.body);
    return res.json({ data: result, msg: "success" });
  } catch (error) {
    next(error);
  }
});


router.patch("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await SubtaskController.updateStatus(id, req.body);
    return res.json({ data: result, msg: "success" });
  } catch (error) {
    next(error);
  }
});


// delet data by id
router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await SubtaskController.removebyId(id);
    return res.json({ data: result, msg: "success" });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
