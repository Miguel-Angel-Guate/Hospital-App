
const { Patient, Physician, Appointment, Sequelize } = require('../models/index');
const{Op} = Sequelize;
const PatientController ={
    
    
    getAll (req, res) {
                     Patient.findAll({
                            include: [Physician, Appointment]
                     })
                     .then(patient => res.send(patient))
},
insert(req,res){
    Patient.create({...req.body})
    .then(patient => { 
        res.status(201).send(patient)
        console.error(err)
        res.status(500).send({message:'the patient was added succefuly'})
    })


},
getOne(req, res) {
       Patient.findByPk(req.params.id, {
               include: [Physician, Appointment]
           })
           .then(patient => res.send(patient))
   },
   getOneByName(req, res) {
     // sequelize.query(`SELECT * FROM books WHERE name LIKE '%${req.params.name}%'`)
     Patient.findAll({
             where: {
                 name: {
                     [Op.like]: `%${req.params.name}%`
                 }
             },
             include: [Physician, Appointment]
         })
         .then(patient => res.send(patient))
 },
 async delete({req,res}) {
    await Patient.destroy({
        where: {
            id: req.params.id
        }
    })
    await patient.destroy({
        where: {
            Patient: req.params.id
        }
    })
    res.send({
        message: 'user was deleted'
    })
}

 }
module.exports=PatientController;









// const { Patient, Appointment, Physician }= require("../models/index")
// const PatientController = {
//        getAll (req, res) {
//               Patient.findAll({
//                      include: [Physician, Appointment]
//               }).then(patients => {
//                      res.json(patients);
//               } );
//        },
//        getOne (req, res) {
//               Patient.findOne({
//                      include: [Physician, Appointment],
//                      where:{
//                             id:re.params.id
//                      }
//               }).then(patient => {
//                      res.json(patient);
//               } );
//        },
//        insert(req,res){
//               Patient.create({...req.body}).then(patient=>{
//                      console.log(req.body)
                     
//                      res.status(201).send({patient,message:'the Patient it was  add succefully'})
//               }).catch(error=>{
//                      console.log(error);
//                      res.status(500).send('had some wrong to added the patients')
//               });
//        },
//        update(req,res){
//               Patient.update({
//                      where:{
//                             id:req.params.id
//                      }
//               },{...req.body}).then(patient=>{
//                      res.send({patient,message:'the Patient  was succefully updated'})
//               }).catch(error=>{
//                      console.log(error);
//                      res.status(500).send('had some wrong to added the patients')
//               });
//        },
//        delete(req,res){
//               Patient.destroy({
//                      where:{
//                             id:req.params.id,
//                      }
//               }).then(()=>res.send({message:'Patient it was deleted succefully'}))
//               .catch(error=>{
//                      console.log(error);
//               });
//               res.status(500).send('we had some wrong when  try deleted the patient')
//        }
// }

// module.exports = PatientController;
