// 'use strict';
module.exports = (sequelize, DataTypes) => {
       const Appointment = sequelize.define('Appointment', {
         PatientId: DataTypes.INTEGER,
         PhysicianId: DataTypes.INTEGER,
         date: DataTypes.DATE
       }, {});
       Appointment.associate = function(models) {
         Appointment.belongsTo(models.Patient);
         Appointment.belongsTo(models.Physician);
       };
       return Appointment;
     };