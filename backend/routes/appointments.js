const router = require('express').Router();
const AppointmentController = require('../controllers/AppointmentController');

router.post('/',AppointmentController.insert);
router.get('/',AppointmentController.getAll);
router.get('/:id',AppointmentController.getOne);
router.get('/name/:name',AppointmentController.getOneByName);


module.exports = router;