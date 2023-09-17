const express = require("express");
const router = require("express").Router();
require("dotenv").config();
const db = require('../models/job.js');
//const Job = require("../models/data");
const Jobs = [{name: "Best Buy",
  contact: "Email",
  title: "Cashier",
  location: "New York"}, {name: "Nike",
  contact: "Email",
  title: "Sales",
  location: "Chicago"}
]

router.get('/', async (req, res) => {
  // const Jobs = await Job.findAll()
  //res.json(places)
  res.json(Jobs)
})

// router.post('/', (req, res) => {
//   db.Job.create (req.body)
//   .then((job) => {
//     res.status(201).json(job)
//   })
//   .catch(err => {
//     if (err && err.name == 'ValidationError') {
//       let message = 'Validation Error: '
//       for (var field in err.errors) {
//         message += `${field} was ${err.errors[field].value}`
//         message += `${err.errors[field].message}`
//       }
//       console.log('Validation error message', message)
//       res.status(401).json({ message, prev: req.body })
//     } else {
//       console.log(err)
//       res.status(500).send("Internal error")
//     }
//   })
// })

// router.put('/:id', (req, res) => {
//   db.Job.findByIdAndUpdate(req.params.id, req.body, { runValidators: true }).
//   then(job => {
//     res.redirect(`/api/places/${req.params.id}`)
//   })
//   .catch(err=>{
//       console.log(err) 
//       res.status(401).json(err)
//   })
// })

module.exports = router