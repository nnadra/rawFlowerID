import { useNavigate} from 'react-router-dom';

const KategoriShop = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user') || 'null');

  const handleClick = () => {
    if (user) {
      navigate("/customBouquet");
    } else {
      navigate("/signin");
    }
  };
  return (
    <div className='lg:flex items-center lg:justify-between mt-10'>
        <div className=''>
            <button onClick={handleClick} className='px-6 w-full lg:w-fit py-3 bg-[#54321A] text-lg text-white rounded-lg me-4 mt-4 border-2 border-amber-900 font-bold'>+ Add custom bouquet</button>
        </div>

        <div className='flex items-center'>
            <input type="text" placeholder="Search..." className='py-3 lg:pe-50 w-full lg:w-fit pe-40 ps-3 rounded-lg border-2 text-lg border-gray-400 mt-4 placeholder:text-gray-400' />
        </div>
    </div>
  )
}

export default KategoriShop
