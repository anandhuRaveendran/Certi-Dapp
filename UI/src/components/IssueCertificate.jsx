
const IssueCertificate = () => {
  return (
<>
<div>
    <h1 className=" text-2xl font-bold">Certificate Dapp</h1>

    <br />
    <div >
      <h3 className="text-center text-3xl font-bold mb-4">Issue New Certificate</h3>
    <div className="flex flex-col justify-center items-center ">
      <form action="/submit-form" method="POST">
        <div className="border-2 rounded px-20" >
          <div className="p-2">
          <label className="block " htmlFor="course">Select Course *</label>
          <select className="border-2 border-black" name="course" id="course">
            <option>Certified Blockchain Associate</option>
            <option>Certified Ethereum Developer</option>
            <option>Blockchain Foundation</option>
            <option>Ethereum Fundamentals</option>
          </select>
        </div>

        <div className="p-2">
          <label className="block" htmlFor="cert_id">Certificate ID *</label>
          <input type="text" className="border-2 border-black" name="cert_id" id="cert_id" placeholder="Certificate ID" required/>
        </div>
        <div className="p-2">
          <label className="block" htmlFor="username">Candidate name *</label>
          <input type="text" className="border-2 border-black" name="username" id="username" placeholder="Name" required/>
        </div>
        <div className=" p-2">
          <label className="block" htmlFor="grade">Select Grade *</label>
          <select className="border-2 border-black" id="grade" name="grade" >
            <option>S</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
          </select>
        </div>
        <div className="p-2">
          <label className="block" htmlFor="issuedate">Issue Date *</label>
          <input  className="border-2 border-black" id="issuedate" name="issuedate" required/>
        </div>
        <button className="border-2 bg-orange-700 hover:bg-orange-400 mt-6 ml-10" type="submit" >Issue Certificate</button></div>
        </form>
      </div>
    </div>
  </div>
</>  )
}

export default IssueCertificate