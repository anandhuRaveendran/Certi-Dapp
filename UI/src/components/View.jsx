import { useLocation } from 'react-router-dom';

const View = () => {
  const location = useLocation();
  const { result } = location.state || {};

  return (
    <div className="relative w-[800px] h-[600px] bg-[#618597] p-[30px] text-[#333] font-sans shadow-md flex items-center justify-center">
      <div className="absolute w-[794px] h-[594px] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 border-2 border-white"></div>
      <div className="absolute w-[730px] h-[530px] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 border-2 border-white"></div>
      
      <div className="relative w-[720px] h-[520px] border border-[#E1E5F0] bg-white flex flex-col items-center justify-center">
        <div className="mb-[10px]">
          <div className="relative top-[40px] text-center font-[Pinyon Script] text-[34px]">
            <h2>Kerala Blockchain Academy</h2>
          </div>
        </div>

        <div className="p-[20px]">      
          <div className="flex justify-center mb-[15px]">
            <div className="flex-1"></div>
            <div className="text-center">
              <span className="text-[20px] font-[Pinyon Script]">{result.username} has scored grade </span>
              <span className="text-[50px] font-bold">{result.grade}</span>
            </div>
            <div className="flex-1"></div>
          </div>
          
          <div className="flex justify-center mb-[15px]">
            <div className="flex-1"></div>
            <div className="text-center">
              <span>while completing the training course entitled</span>
            </div>
            <div className="flex-1"></div>
          </div>

          <div className="flex justify-center mb-[20px]">
            <div className="flex-1"></div>
            <div className="text-center">
              <span className="text-[20px] font-bold">{result.course}</span>
            </div>
            <div className="flex-1"></div>
          </div>
          
          <div className="flex justify-between items-center">
            <div className="text-center text-[12px]">
              <span>certified by KBA</span>
              <div className="h-[40px] w-full">ID : {result.cert_id}</div>
            </div>
            <div className="flex-1"></div>
            <div className="text-center text-[12px]">
              <span>Date Completed</span>
              <div>
                <span className="text-[15px] font-bold">{result.issuedate}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default View;
