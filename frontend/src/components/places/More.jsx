import {useState, useEffect} from 'react'
import axios from 'axios'
import { ReactDOM } from 'react'

const React = require('react')
const Def = require('../NavBar.jsx')

function More () {
    const [jobs, setJobs] = useState([]);

    const client = axios.create({
        baseURL: 'http://localhost:5001/jobs'
    })

    const fetchPost = async() => {
        const response = await client.get('http://localhost:5001/jobs')
        setJobs(response.data);
    }

    const addPost = async(title, body) => {
        const response = await client.post('', {
            title,
            body
        });
        setJobs((prevJobs) => [response.data, ...prevJobs])
    };
    
    const deletePost = async(id) => {
        const response = await client.delete(`${id}`);
        setJobs(jobs.filter((jobs) => jobs.id !== id))
    };

    return (
        <>
        <h1>More Jobs</h1>
          <h2>Jobs</h2>
            {jobs.map((job) => 
              <jobs 
                key={jobs.id} 
                id={jobs.id}
                title={jobs.title} 
                body={jobs.body} 
                deletePost={deletePost}
              />
            )}
       </>
      )
    }


//     useEffect(() => {
//         fetch('/jobs')
//         .then((res) => res.json())
//         .then((data) => {
//             setJobs(data)
//            console.log(data);
//         })
//     })
    
//     return(
//         <>
//         <h1>More Jobs</h1>
//         </>
//     )
 
export default More;