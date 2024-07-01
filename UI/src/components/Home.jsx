import logo from '../assets/images/Logo.png'
const Home = () => {
  return (
<>
<div className="flex flex-col items-center h-screen justify-center">
          <h1 className="font-extrabold text-3xl mb-7">Certificate DApp</h1>
          <div className="pb-4">
          <img src={logo} width="200" height="200"/></div>
          <input type="text" id="certificateID" name="certificateID" className="border-2 border-zinc-950 mb-2"
          placeholder="Enter Certificate ID to View"/>
          <button className="border-1 bg-cyan-700 px-8 py-4 rounded text-white" >
            Search
        </button>
        </div>
</>  )
}

export default Home