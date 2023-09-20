const React = require("react");
import { useState } from "react";
import { useNavigate } from "react-router-dom";
//const NavBar = require('../NavBar.jsx')

function AddJob() {
  const navigate = useNavigate();

  const [job, setJob] = useState({
    name: "",
    title: "",
    location: "",
    contact: "",
  });

  async function handleSubmit(e) {
    e.preventDefault()

    await fetch('http://localhost:5000/jobs', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(job)

    })
    navigate.push('/jobs')
  }
  return (
    <main>
      <h1>Add a Job Listing</h1>
      <form method="POST" action="/places">
        <div className="form-group">
          <label htmlFor="name">Business Name</label>
          <input
            className="form-control"
            id="name"
            name="name"
            type="text"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="title">Job Title</label>
          <input
            className="form-control"
            id="title"
            name="title"
            type="text"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input
            className="form-control"
            id="location"
            name="location"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="contact">Contact Info</label>
          <input className="form-control" id="contact" name="contact" />
        </div>
        <input className="btn btn-primary" type="submit" value="Add Job" />
      </form>
    </main>
  );
}

export default AddJob;