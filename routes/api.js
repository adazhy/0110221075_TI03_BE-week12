// Import Student Controller
const StudentController = require("../controllers/StudentController");

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello Express");
});

router.get("/students", StudentsController.index);
router.post("/students", StudentsController.store);
router.put("/students/:id", StudentsController.update);
router.delete("/students/:id", StudentsController.destroy);

// Export router
module.exports = router;