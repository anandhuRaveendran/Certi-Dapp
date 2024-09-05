import logo from '../assets/images/Logo.png'
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BrowserProvider, Contract } from 'ethers';
import { abi } from '../scdata/Cert.json';
import { CertModuleCert } from '../scdata/deployed_addresses.json';
const Home = () => {
  const provider = new BrowserProvider(window.ethereum);

  const [certificateID, setcertificateID] = useState('');
  // const [data, setData] = useState([]);

  const navigate=useNavigate();
  const handleSubmit= async()=>{
    // const response = await fetch(`/api/certificate/${certificateID}`);    
    // const data = await response.json();

    const instance = new Contract(CertModuleCert, abi, provider);
    const data = await instance.Certificates(certificateID);
    console.log('blockchain :', data[0])
    const result = {
      'cert_id': certificateID,
      'username': data[0],
      'course': data[1],
      'grade': data[2],
      'issuedate':data[3]
    }
    console.log(result)
    if (result.username !='') {
      navigate(`/view`,{state:{result}});
    } else { 
      alert('please enter valid id');
    }
  }
  return (
<>
<div className="flex flex-col items-center h-screen justify-center">
          <h1 className="font-extrabold text-3xl mb-7">Certificate DApp</h1>
          <div className="pb-4">
          <img src={logo} width="200" height="200"/></div>
          <input type="text" id="certificateID" name="certificateID" className="border-2 border-zinc-950 mb-2"
          placeholder="Enter Certificate ID to View"               onChange={(e) => setcertificateID(e.target.value)}
/>
          <button onClick={handleSubmit} className="border-1 bg-cyan-700 px-8 py-4 rounded text-white" >
            Search
        </button>
        </div>
</>  )
}

export default Home