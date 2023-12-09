
import { useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateProduct = () => {
    const product = useLoaderData()
    console.log(product);
    const handleUpdateProduct = e =>{
        e.preventDefault();
        const form = e.target;
        const Brand = form.brand.value;
        const photo = form.photo.value;
        const name = form.name.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const updatedProduct= {Brand, photo, name, price, description, rating }
        fetch(` https://assignment-server-1i30pl04w-shopnils-projects.vercel.app/products/${product._id}`,{
            method:'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedProduct)
        })
        .then(res=> res.json())
        .then(data=> {
            if( data.modifiedCount ==1){
                toast('Update successful')
            }
        })
       
        form.reset()
    }
    return (
        <div className='w-4/6 mx-auto h-2/3 border border-stone-950 rounded-xl mt-5'>
            <h1 className='mb-3 text-center font-bold'>Update Product</h1>
            <hr className='mb-3 w-1/2 mx-auto'/>
            <form onSubmit={handleUpdateProduct}  className='w-1/2 mx-auto  rounded-xl px-5 py-3' >
                <input type="text" defaultValue={product.Brand} placeholder='Brand name (in capital latter)' name='brand' className='input bg-white input-bordered mt-4  mb-3 w-full' />
                <br />
                <input type="text"defaultValue={product.photo} placeholder='photoURL' name="photo" className='input bg-white input-bordered mb-3 w-full' />
                <br />
                <input type="text"defaultValue={product.name} placeholder='name ' name='name' className='input bg-white input-bordered  mb-3 w-full' />
                <br />
                <input type="text"defaultValue={product.price} placeholder='price' name="price" className='input bg-white input-bordered mb-3 w-full' />
                <br />
                <input type="text"defaultValue={product.description} placeholder='Description' name='description' className='input bg-white input-bordered   mb-3 w-full' />
                <br />
                <input type="text"defaultValue={product.rating} placeholder='Rating(out-of/10)' name="rating" className='input bg-white input-bordered mb-3 w-full' />
                <br />
                <div className='mx-auto  flex justify-center'>
                <input type="submit" value="Update" className='btn btn-success mx-auto  bg-white mb-3 ' />
                </div>
                
            </form>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default UpdateProduct;