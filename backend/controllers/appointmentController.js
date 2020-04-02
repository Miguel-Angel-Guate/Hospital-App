
const { Appointment, Physician, Patient, Sequelize } = require('../models/index');
const{Op} = Sequelize;
const AppointmentController ={
  getAll (req, res)  {
    Appointment.findAll({
      include: [Physician, Patient]
    }).then(appointments => {
      res.json(appointments);
    });
  },
  
  insert(req,res){
        Appointment.create({...req.body})
        .then(appointment=>res.send(appointment))
        .catch(err=>{
            console.error(err)
            res.status(500).send({message:'Ha habido un problema al tratar de crear el paciente'})
        })
    },
    getOne(req, res) {
      Appointment.findByPk(req.params.id, {
              include: [Patient, Physician]
          })
          .then(appointment => res.send(appointment))
   },  
      getOneByName(req, res) {
        // sequelize.query(`SELECT * FROM books WHERE name LIKE '%${req.params.name}%'`)
        Appointment.findAll({
                where: {
                    name: {
                        [Op.like]: `%${req.params.name}%`
                    }
                },
                include: [Physician, Patient]
            })
            .then(appointment => res.send(appointment))
    },
    async delete({req, res}) {
      await Appointment.destroy({
          where: {
              id: req.params.id
          }
      })
      await appointment.destroy({
          where: {
              Appointment: req.params.id
          }
      })
      res.send({
          message: 'user was deleted'
      })
  }
}
module.exports=AppointmentController;




// const { Appointment, Physician, Patient} =require('../models/index.js');

// const AppointmentController =  {
//   getAll (req, res)  {
//     Appointment.findAll({
//       include: [Physician, Patient]
//     }).then(appointments => {
//       res.json(appointments);
//     });
//   },
//   insert(req,res){
//     Appointment.create({...req.body}).then(appointment=>{
//       res.status(201).send({appointment,message:'Ya se ha creado la cita entre el doctor y usted'})
//     }).catch(error=>{
//       console.log(error);
//       res.status(500).send('Ha habido un problema al tratar de eliminar la cita')
//     })
//   },
//   update(req,res){
//     Appointment.update({
//       where:{
//         id:req.params.id
//       }
//     },{...req.body})
//   },
//   delete(req,res){
//     Appointment.destroy({
//       where:{
//         id:req.params.id,
//         // include: [Physician, Patient]
//       }, //then(appointment => {
//       //        res.json(appointment[0]);
//       //      })
//     }).then(()=>res.send({message:'Cita eliminada con éxito'}))
//     .catch(error=>{
//       console.log(error);
//       res.status(500).send('Ha habido un problema al tratar de eliminar la cita')
//     })
//   }
  
// }
// module.exports = AppointmentController;