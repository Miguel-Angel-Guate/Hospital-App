
const { Physician, Patient, Appointment, Sequelize} = require('../models/index');
const {Op} = Sequelize;
const PhysicianController ={
    // insert(req,res){
    //     Physician.create(req.body)
    //     .then(physician=>res.send(physician))
    //     .catch(err=>{
    //         console.error(err)
    //         res.status(500).send({message:'Ha habido un problema al tratar de crear el paciente'})
    //     })

    // },
    getAll(req, res) {
        Physician.findAll({
                include: [Patient, Appointment]
            })
            .then(physician => res.send(physician))
    },
    insert(req, res) {
      Physician.create({...req.body})
          .then(physician => {
            
              res.status(201).send(physician)
          })
  },
    
  getOne(req, res) {
      Physician.findByPk(req.params.id, {
              include: [Patient, Appointment]
          })
          .then(physician => res.send(physician))
  },
  getOneByName(req, res) {
    // sequelize.query(`SELECT * FROM books WHERE name LIKE '%${req.params.name}%'`)
    Physician.findAll({
            where: {
                name: {
                    [Op.like]: `%${req.params.name}%`
                }
            },
            include: [Patient, Appointment]
        })
        .then(physician => res.send(physician))
},
async delete(req, res) {
    await Physician.destroy({
        where: {
            id: req.params.id
        }
    })
    await physicianId.destroy({
        where: {
            PhysicianId: req.params.id
        }
    })
    res.send({
        message: 'user was deleted'
    })
}

}
module.exports=PhysicianController; 








//-------------------------------------------------
// const Physician = require("../models").Physician;
// const Patient = require("../models").Patient;

// module.exports = {
//   getAll(req,res){
// physician.findAll({...req,body})
//   },
//   getAll(req, res) {
//     Physician.findAll({
//       include: [Patient]
//     })
//       .then(physicians => {
//         res.json(physicians);
//       })
//       .catch(error=>{
//         console.log(error);
//         res.status(500).send('the list of physicians and patients')
//  });
//   },

//   getOne(req, res){
//     Physician.findOne({
//       where: { id: req.params.id }
//     })
//       .then(physician => {
//         res.json(physician[0]);
//       })
//       .catch(err => res.json(err));
//   },

//   insert(req, res) {
//     Physician.create({
//        name: req.body.name    })
//        .then(physician =>res.send(physician)
//       .catch(error=>{
//                      console.log(error);
//                      res.status(500).send('had some wrong to added the patients')
//               })
//        )},

//   update(req, res) {
//     Physician.update({ name: req.body.name }, { where: { id: req.params.id } })
//       .then(updatedPhysician => {
//         res.json(updatedPhysician);
//       })
//       .catch(err => res.json(err));
//   },

//   delete(req, res){
//     Physician.destroy({
//       where: { id: req.params.id }
//     })
//       .then(physician => {
//         res.json(physician);
//       })
//       .catch(err => res.json(err));
//   }
// };