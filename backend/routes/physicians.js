const router = require('express').Router();
const PhysicianController = require('../controllers/PhysicianController');

router.post('/',PhysicianController.insert);
router.get('/',PhysicianController.getAll);
router.get('/name/:name',PhysicianController.getOneByName);

router.get('/:id',PhysicianController.getOne);
router.delete('/:id',PhysicianController.getOne);
// router.get('/name/:name',PhysicianController.getByName);


module.exports = router;

//------------
// const router = require('express').Router();
// const PhysicianController = require('../controllers/physicianController.js');


// router.get('/',PhysicianController.getAll);
// router.get('/:id',PhysicianController.getOne)
// router.post('/',PhysicianController.insert);
// router.put('/',PhysicianController.update);
// router.delete('/:id',PhysicianController.delete);


// module.exports= router;