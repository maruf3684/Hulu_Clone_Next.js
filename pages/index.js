import styles from "../styles/Home.module.css";
import Head from "next/head";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Results from "../components/Results";
import Movies from "../utils/request";
import React from 'react'

const index = ({data}) => {
	

	return (
		<React.Fragment >
			<Head>
				<title>Hulu</title>
			</Head>

			{/* Header */}
			<Header />
			{/* Nav */}
			<Nav />
			{/* Result */}
			<Results data={data}/>
		</React.Fragment>
	);
};

export default index;


export async function getServerSideProps(context) {
	const  genre  = context.query.genre||"fetchTrending";
	const res = await fetch(
		`https://api.themoviedb.org/3${Movies[genre].url}`
	);
	const data = await res.json();
	return {
		props: {
			data,
		},
	};
}

