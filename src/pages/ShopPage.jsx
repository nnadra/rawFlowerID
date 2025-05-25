import SliderShop from '../component/SliderShop';
import KategoriShop from '../component/KategoriShop';
import CategoryShop from '../component/CategoryShop';
import Footer from '../component/Footer';


const ShopPage = () => {
    // const navigate = useNavigate();
    return (
      <div className='bg-white'>
      <div className='p-5 lg:p-10'>
        <SliderShop />
        <KategoriShop/>
        <CategoryShop/>
      </div>
      <Footer/>
      </div>
    )
}

export default ShopPage
