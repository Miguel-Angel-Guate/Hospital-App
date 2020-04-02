'use strict';
module.exports = (sequelize, DataTypes) => {
  const Physician = sequelize.define('Physician', {
    name: DataTypes.STRING,
    img: DataTypes.STRING
  }, {});
  Physician.associate = function(models) {
    Physician.belongsToMany(models.Patient,{
      through:models.Appointment
    });
    Physician.hasMany(models.Appointment);
  };
  return Physician;
};