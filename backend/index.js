
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const patientsRouter = require('./routes/patients.js');
const physiciansRouter = require('./routes/physicians.js');
const appointmentsRouter = require('./routes/appointments');

app.use((req, res, next) => {
       res.header('Access-Control-Allow-Origin', '*');
       res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
       res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
       res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
       next();
   });

app.use(express.json());

app.use('/patients',patientsRouter);
app.use('/physicians',physiciansRouter);
app.use('/appointments',appointmentsRouter);

app.listen(PORT,()=>console.log('server running on port '+PORT))




// const express = require('express');
// const morgan = require('morgan');


// const app = express();
// const PORT =  process.env.PORT || 3000;

// // const appointmentsRouter =require('./routes/appointments.js');
// // const patientsRouter =require('./routes/patients.js');
// const physiciansRouter =require('./routes/physicians.js');

// app.use(express.urlencoded({extended:true}));
// app.use(express.json());
// app.use(morgan('dev'));

// // app.use('/appointments',appointmentsRouter);
// //  app.use('/patients',patientsRouter);
//  app.use('/physicians',physiciansRouter);


// // // simple route
// // app.get("/", (req, res) => {
// //        res.json(  "Welcome to my users page" );
// //      });
// app.listen(PORT,()=>console.log(`the server it´s running on port ${PORT}`))