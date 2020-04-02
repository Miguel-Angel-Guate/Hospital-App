const router = require('express').Router();
const PatientController = require('../controllers/PatientController');

router.post('/',PatientController.insert)
router.get('/',PatientController.getAll);
router.get('/:id',PatientController.getOne);
router.get('/name/:name',PatientController.getOneByName);
router.delete('/:id',PatientController.getOne);
router.delete('/name/:name',PatientController.getOneByName);
// router.get('/name',PatientController.getOneByName);

module.exports = router;