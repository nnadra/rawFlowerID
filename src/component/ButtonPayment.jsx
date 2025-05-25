import { useNavigate } from "react-router-dom";

const ButtonPayment = () => {
  const navigate = useNavigate();
  return (
    <div className='w-full flex lg:justify-end mt-5'>
        <button onClick={()=>{navigate("/status");}} className='py-5 w-full lg:w-fit px-20 cursor-pointer bg-amber-950 text-2xl font-bold rounded-xl text-white'>
            Order
        </button>
    </div>
  )
}

export default ButtonPayment
