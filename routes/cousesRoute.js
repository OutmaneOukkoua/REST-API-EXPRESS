const express = require("express");

const router = express.Router();

const coursControllers = require('../controllers/coursControllers');

const {validation} = require('../middleware/validation');

router.get('/',coursControllers.getAllCourses)

router.get('/:coursId',coursControllers.getCours)

router.post('/',validation(),coursControllers.addCours)

router.patch('/:coursId',coursControllers.updateCours)

router.delete('/:coursId',coursControllers.deleteCours)


module.exports = router;
