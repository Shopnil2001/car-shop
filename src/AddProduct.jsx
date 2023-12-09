import React from 'react';

const AddProduct = () => {
    const handleAddProduct = e =>{
        e.preventDefault();
        const form = e.target;
        const Brand = form.brand.value;
        const photo = form.photo.value;
        const name = form.name.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const newProduct= {Brand, photo, name, price, description, rating }
        fetch(' https://assignment-server-1i30pl04w-shopnils-projects.vercel.app/products',{
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
        .then(res=> res.json())
        .then(data=> console.log(data))
        
    }
    return (
        <div className='w-4/6 mx-auto h-2/3 border border-stone-950 rounded-xl'>
            <h1 className='mb-3 text-center font-bold'>Add Product</h1>
            <hr className='mb-3 w-1/2 mx-auto'/>
            <form onSubmit={handleAddProduct}  className='md:w-2/3 lg:w-1/2 w-full mx-auto  rounded-xl px-5 py-3' >
                <input type="text" placeholder='Brand name (in capital latter)' name='brand' className='input bg-white input-bordered mt-4  mb-3 w-full' />
                <br />
                <input type="text" placeholder='photoURL' name="photo" className='input bg-white input-bordered mb-3 w-full' />
                <br />
                <input type="text" placeholder='name ' name='name' className='input bg-white input-bordered  mb-3 w-full' />
                <br />
                <input type="text" placeholder='price' name="price" className='input bg-white input-bordered mb-3 w-full' />
                <br />
                <input type="text" placeholder='Description' name='description' className='input bg-white input-bordered   mb-3 w-full' />
                <br />
                <input type="text" placeholder='Rating(out-of/10)' name="rating" className='input bg-white input-bordered mb-3 w-full' />
                <br />
                <div className='mx-auto  flex justify-center'>
                <input type="submit" value="Add" className='btn btn-success mx-auto bg-white mb-3 ' />
                </div>
            </form>
        </div>
    );
};

export default AddProduct;