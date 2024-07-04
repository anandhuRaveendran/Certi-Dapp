// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const IssueCertificate = () => {

  const [course, setCourse] = useState('');
  const [cert_id, setCert_id] = useState('');
  const [username, setUsername] = useState('');
  const [grade, setGrade] = useState('');
  const [issuedate, setIssuedate] = useState('');
const navigate=useNavigate();
const handleSubmit= async(e)=>{
  e.preventDefault();
  console.log(course)
  console.log(grade)
  const response = await fetch(`http://localhost:5000/submit-form`,{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({course,cert_id,username,grade,issuedate}),
  }
  );    
  const data = await response.json();
console.log(data)
 if (data) {
  navigate('/');
} else {
  alert(data.message);
}
}
  return (
<>
<div>
    <h1 className=" text-2xl font-bold">Certificate Dapp</h1>

    <br />
    <div >
      <h3 className="text-center text-3xl font-bold mb-4">Issue New Certificate</h3>
    <div className="flex flex-col justify-center items-center ">
      <form onSubmit={handleSubmit}>
        <div className="border-2 rounded px-20" >
          <div className="p-2">
          <label className="block " htmlFor="course">Select Course *</label>
          <select className="border-2 border-black" name="course" id="course" onChange={(e) => setCourse(e.target.value)}>
            <option>Certified Blockchain Associate</option>
            <option>Certified Ethereum Developer</option>
            <option>Blockchain Foundation</option>
            <option>Ethereum Fundamentals</option>
          </select>
        </div>

        <div className="p-2">
          <label className="block" htmlFor="cert_id">Certificate ID *</label>
          <input type="text" className="border-2 border-black" name="cert_id" id="cert_id" placeholder="Certificate ID" onChange={(e) => setCert_id(e.target.value)} required/>
        </div>
        <div className="p-2">
          <label className="block" htmlFor="username">Candidate name *</label>
          <input type="text" className="border-2 border-black" name="username" id="username" placeholder="Name" onChange={(e) => setUsername(e.target.value)} required/>
        </div>
        <div className=" p-2">
          <label className="block" htmlFor="grade">Select Grade *</label>
          <select className="border-2 border-black" id="grade" name="grade"onChange={(e) => setGrade(e.target.value)} >
            <option>S</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
          </select>
        </div>
        <div className="p-2">
          <label className="block" htmlFor="issuedate">Issue Date *</label>
          <input  className="border-2 border-black" id="issuedate" name="issuedate"onChange={(e) => setIssuedate(e.target.value)} required/>
        </div>
        <button className="border-2 bg-orange-700 hover:bg-orange-400 mt-6 ml-10" type="submit" >Issue Certificate</button></div>
        </form>
      </div>
    </div>
  </div>
</>  )
}

export default IssueCertificate