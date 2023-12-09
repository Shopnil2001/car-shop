
const handleAddBrand = e =>{
    e.preventDefault();
    const form = e.target;
    const Brand = form.brand.value;
    const photo = form.photo.value;
    const newBrand= {Brand, photo}
    fetch(' https://assignment-server-1i30pl04w-shopnils-projects.vercel.app/brands',{
        method:'POST',
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify(newBrand)
    })
    .then(res=> res.json())
    .then(data=> console.log(data))
}

const BrandAdd = () => {
    return (
        <div className='w-4/5 mx-auto h-2/3 border'>
            <h1 className='mb-3'>Add Brand</h1>
            <form onSubmit={handleAddBrand} className='w-1/2 mx-auto bg-white rounded-xl px-5 py-3' >
                <input type="text" placeholder='Brand name (in capital latter)' name='brand' className='input bg-white input-bordered mt-4  mb-3 w-full' />
                <br />
                <input type="text" placeholder='photoURL' name="photo" className='input bg-white input-bordered mb-3 w-full' />
                <br />
                <input type="submit" value="Add" className='btn bg-white mb-3 ' />
            </form>
        </div>
    );
};

export default BrandAdd;