import Tour from "./Tour";

const Tours = ({ tours , removeTour }) => {
	return (
		
		<>
			<section className="flex justify-center mt-16 text-6xl font-bold">
				<div>
					<h1 className=" border-b-4 border-indigo-600 pb-5"> Our Tours </h1>
				</div>
			</section>
			<section className="grid grid-cols-1 lg:grid-cols-2  w-5/6 m-auto gap-8 mt-10">
				{tours.map((tour) => {
					return <Tour removeTour={removeTour} key={tour.id} {...tour} />;
				})}
			</section>
		</>
	);
};

export default Tours;
