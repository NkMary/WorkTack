import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

function More () {
    const [jobs,setJobs] = useState([])
	const navigate=useNavigate();

    useEffect(()=>{
        const fetchData = async () => {
            const response = await fetch ('http://localhost:5000/jobs')
            const resData = await response.json()
            setJobs(resData)

        }
        fetchData()
    },[])

    let jobsFormatted = jobs.map((job) => {
        return(
            <div key={job._id}>
                <h1> {job.business} </h1>
				<h4> {job.title}</h4>
				<p> {job.description}</p>
				<p> {job.location}</p>
            </div>
        )
    })
        console.log(jobs)
     return(
       <>
        <h1>More Jobs</h1>
        {jobsFormatted}
        </>    
  )
 }

export default More;