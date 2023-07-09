import React, { useState } from "react";

const Tour = ({ id, image, info, price, name ,removeTour}) => {
	const [readMore, setReadMore] = useState(false);
	return (
		<>
			<div className=" relative first-letter: bg-white shadow-sm hover:shadow-xl transition-shadow rounded">
				<img className="w-full rounded-t h-80" src={image} alt={name} />
				<span className="absolute top-[0px] bg-blue-500 right-[0px] text-white py-1 px-4">
					{price}
				</span>
				<footer className=" px-8 py-6">
					<h1 className="  text-2xl font-bold text-center md:text-1xl my-4 lg:text-start">
						{name}
					</h1>
					<p className=" md:text-sm">{readMore ? info : `${info.substring(0, 200)}...`}
					<button className="text-blue-500 mx-2" onClick={()=>setReadMore(!readMore)}>
						{readMore? 'Show Less' : 'Read More'}
					</button>
					</p>
					<button onClick={()=>removeTour(id)} className=" rounded-full bg-blue-500 px-3 mt-8 text-center text-white py-2 w-full hover:bg-red-600 transition-all">
						Not Interested
					</button>
				</footer>
			</div>
		</>
	);
};

export default Tour;
