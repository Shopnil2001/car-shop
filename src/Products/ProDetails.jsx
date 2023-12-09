import { useContext, useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { AuthContext } from '../AuthProvider';
import { ToastContainer, toast } from 'react-toastify';

const ProDetails = () => {
  const products = useLoaderData()
  const { _id } = useParams()
  const Product = products.find(pro => pro._id === _id);
  const { user } = useContext(AuthContext)
  const [MUser, setMUsers] = useState()

  const [CartProduct, setCartProduct] = useState([])



  useEffect(() => {
    fetch(' https://assignment-server-1i30pl04w-shopnils-projects.vercel.app/users')
      .then(res => res.json())
      .then(data => {

        const MUser = data.find(u => u.email == user?.email)
        console.log(MUser);


        setMUsers(MUser);


      })

  }, [user])
  useEffect(() => {
    if (MUser && Array.isArray(MUser.Cart)) {
      setCartProduct(MUser.Cart);
    }

  }, [MUser, CartProduct]);








  const handleCart = () => {
    if (CartProduct.some(item => item._id === Product._id)) {

      toast('Product already added to cart');
      return;
    }

    const updatedCart = [...CartProduct, Product];

    const newUser = {

      Cart: updatedCart
    };

    fetch(` https://assignment-server-1i30pl04w-shopnils-projects.vercel.app/users/${MUser._id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount === 1) {
          setCartProduct(updatedCart);
          toast('Added to Cart');
        }
      });
  };


  return (
    <div className='lg:px-32 min-h-screen'>
      <div data-aos="fade-right"
        data-aos-anchor="#example-anchor"
        data-aos-offset="500"
        data-aos-duration="1000"

        className="card lg:card-side bg-base-100 shadow-xl">
        <figure><img className='w-full' src={Product?.photo} alt="Album" /></figure>
        <div className="card-body">
          <h2 className="card-title">Model:{Product?.name}</h2>
          <p>Brand:{Product?.Brand}</p>
          <p>Price:{Product?.price}</p>
          <p>Rating:{Product?.rating}/10</p>
          <p>{Product?.description}</p>
          <div className="card-actions justify-end">
            <button onClick={handleCart} className="btn btn-primary">Add to cart</button>
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );

};

export default ProDetails;
