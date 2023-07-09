import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";
function App() {
	// Hooks
	const [loading, setLoading] = useState(true);
	const [tours, setTours] = useState([]);

	const removeTour = (id) => {
		const newTours = tours.filter((tour) => tour.id !== id);
		setTours(newTours);
		console.log(newTours);
	};
	// Fetching Data
	const getTours = async () => {
		setLoading(true);
		try {
			const res = await fetch(url);
			const tours = await res.json();
			setTours(tours);
			setLoading(false);
		} catch (error) {}
		setLoading(false);
	};
	// useEffect Hook
	useEffect(() => {
		getTours();
	}, []);

	//Loading Condition
	if (loading) {
		return (
			<main>
				<Loading />
			</main>
		);
	}

	if (tours.length === 0) {
		return (
			<main className="flex flex-col justify-center">
				<h1 className="flex justify-center mt-16 text-6xl font-bold">
					There is no Tours
				</h1>
				<div className="m-auto">
					<button onClick={()=>getTours()} className=" rounded-full bg-blue-500 px-3 mt-8 text-white py-2 hover:bg-blue-700  transition-all">
						Restore
					</button>
				</div>
			</main>
		);
	}

	return (
		<main>
			<Tours removeTour={removeTour} tours={tours} />
		</main>
	);
}

export default App;
