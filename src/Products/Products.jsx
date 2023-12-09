

import { Link, useLoaderData, useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import Swiper styles
import 'swiper/css';


const Products = () => {
    const AllProduct = useLoaderData();
    console.log(AllProduct);


    const { _Brand } = useParams();

    const newProduct = AllProduct.filter(pro => pro.Brand === _Brand)
    console.log(newProduct);
    if (newProduct.length == 0) {
        return <div className='text-center mt-20 text-red-500 min-h-screen'>
            <h1 className='text-5xl font-bold' >Products not available</h1>
            <p className='text-2xl font-semibold'>New product coming soon </p>
        </div>
    }



    return (
        <>
            <div className='mx-auto'>
                <h1 className='text-center text-4xl font-bold'>Advertisement</h1>
                <hr className='w-1/3 mx-auto mb-8 font-bold' />
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper mb-16"
                >
                    {
                        newProduct.map(product => <SwiperSlide key={product._id}  ><div className="hero h-96 w-2/3 mx-auto " style={{ backgroundImage: `url(${product.photo})` }}>
                            <div className="hero-overlay bg-opacity-60"></div>
                            <div className="hero-content text-center text-neutral-content ">
                                <div className="max-w-md">
                                    <p className="mb-2 text-2xl font-semi-bold">Check out our newest cars</p>
                                    <h1 data-aos="zoom-out" className="mb-2 text-3xl font-bold">{product.name}</h1>
                                    
                                </div>
                            </div>
                        </div></SwiperSlide>)
                    }


                </Swiper>
            </div>
            <div>
                <h1 className='text-center text-4xl font-bold'>Products</h1>
                <hr className='w-1/3 mx-auto mb-8 font-bold' />
                <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-3'>
                    {
                        newProduct.map(product => <div 
                            data-aos="fade-right"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine" key={product._id} className='card w-96 glass mx-auto '>
                            <figure><img className='w-full' src={product.photo} alt="car!" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Model:{product.name}</h2>
                                <p>Brand:{product.Brand}</p>
                                <p>Price:{product.price}</p>
                                <p>Rating:{product.rating}/10</p>

                                <div className="card-actions justify-end">
                                    <Link to={`/product/${product._id}`}><button className="btn btn-primary">Details</button></Link>
                                    <Link to={`/Update/${product._id}`}><button className="btn btn-error">Update</button></Link>
                                </div>
                            </div>

                        </div>)
                    }

                </div>
                <h1 className='text-center text-4xl font-bold mt-10 text-amber-600'>More product coming soon.....</h1>
            </div>
        </>
    );
};


export default Products;
