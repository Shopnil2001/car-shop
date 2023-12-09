import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const BrandCard = ({ brand }) => {
    const { _Brand, _id, photo } = brand;
 
    
    console.log(brand._Brand);
    return (
        <div data-aos="zoom-in-up"
        data-aos-duration="1000"
  >
            <Link to={`/Products/${_Brand}`} key={_id}><div className='className="card w-3/4 bg-base-100 shadow-2xl rounded-2xl mx-auto '>
                <figure className=" ">
                    <img className=" w-full h-56 rounded-t-2xl" src={photo} alt="Shoes" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title font-bold">{_Brand}</h2>
                    

                </div>



            </div></Link>

        </div>
    );
};

export default BrandCard;