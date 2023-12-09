import React from 'react';

const Review = () => {
    return (
        <div className='lg:flex mt-5 justify-around'>
            <div className="card w-60 bg-base-100 shadow-xl mx-auto">
                <figure className="px-10 pt-10 w-40 mx-auto">
                    <img src={'https://i.ibb.co/h1SkYqB/member1.png'} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Matt</h2>
                    <p>I am too poor to buy car</p>
                    <div className="card-actions">
                        <div className="rating rating-sm">
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
                        </div>
                    </div>
                </div>
            </div>
            <div className="card w-60 bg-base-100 shadow-xl mx-auto">
                <figure className="px-10 pt-10 w-40 mx-auto">
                    <img src={'https://i.ibb.co/12ZKQXS/member2.png'} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Jenny</h2>
                    <p>I am Buying Car with my husband's money. It's great </p>
                    <div className="card-actions">
                        <div className="rating rating-sm">
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="card w-60 bg-base-100 shadow-xl mx-auto">
                <figure className="px-10 pt-10 w-40 mx-auto">
                    <img src={'https://i.ibb.co/vd679Xr/member3.png'} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Joshim</h2>
                    <p> There Behave is very polite. </p>
                    <div className="card-actions">
                        <div className="rating rating-sm">
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="card w-60 bg-base-100 shadow-xl mx-auto">
                <figure className="px-10 pt-10 w-40 mx-auto">
                    <img src={'https://i.ibb.co/YcJqKkk/member4.png'} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Jorina</h2>
                    <p> Most of the cars are secondhand</p>
                    <div className="card-actions">
                        <div className="rating rating-sm">
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;