import { useContext, useEffect, useState } from 'react';
import { AuthContext } from './AuthProvider';
import { useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const MyCart = () => {
    const { user, loading } = useContext(AuthContext)
    const MUsers = useLoaderData();
    const MUser = MUsers.find(u => u.email == user?.email)
    const [cart, setCart] = useState([]);
    useEffect(() => {
        if (MUser && Array.isArray(MUser.Cart)) {
            setCart(MUser.Cart);
        }



    }, [MUser]);

    const handleCart = (id, product) => {
        const updatedCart = cart.filter(pro => pro.name != product.name)
        setCart(updatedCart)
        console.log(id);
        const updatedUser = { updatedCart }
        console.log(updatedCart);
        fetch(` https://assignment-server-1i30pl04w-shopnils-projects.vercel.app/users/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedUser)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount == 1) {
                    toast('Removed from cart')
                }
            })

    }


    if (loading) {
        return <div className='text-center mt-20 text-red-500 min-h-screen'>
            <h1 className='text-2xl font-bold' >loading....</h1>

        </div>
    }

    if (!MUser?.Cart) {
        return <div className='text-center mt-20 text-red-500 min-h-screen'>
            <h1 className='text-5xl font-bold' >No Cart Yet</h1>
            <p className='text-2xl font-semibold'>Add Your Favorite Car To Cart </p>
        </div>
    }


    return (
        <div>
            <h1 className='text-3xl font-bold text-center  mt-5' >Your Cart</h1>
            <hr className='w-1/4 mb-10 border border-zinc-950 mx-auto' />



            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-3 mx-11'>

                {
                    cart.map(product => <div data-aos="fade-up"
                        data-aos-anchor-placement="top-center"
                        key={product._id} className='card w-3/4 glass mx-auto '>
                        <figure><img className='w-full h-60' src={product.photo} alt="car!" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Model:{product.name}</h2>
                            <p>Brand:{product.Brand}</p>
                            <p>Price:{product.price}</p>
                            <p>Rating:{product.rating}/10</p>
                            <div className="card-actions justify-end">
                                <button onClick={() => handleCart(MUser._id, product)} className="btn btn-error">Remove </button>

                            </div >


                            {/* <div className="card-actions justify-end">
                            <Link to={`/product/${product._id}`}><button className="btn btn-primary">Details</button></Link>
                            <Link to={`/Update/${product._id}`}><button className="btn btn-error">Update</button></Link>
                        </div> */}
                        </div>
                    </div>)
                }

            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default MyCart;