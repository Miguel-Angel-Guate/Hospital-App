'use strict';
module.exports = (sequelize, DataTypes) => {
  const Patient = sequelize.define('Patient', {
    name: DataTypes.STRING
    
  }, {});
  Patient.associate = function(models) {
    // associations can be defined here
    Patient.belongsToMany(models.Physician,{
      through:models.Appointment
    });
    Patient.hasMany(models.Appointment);
  };
  return Patient;
};