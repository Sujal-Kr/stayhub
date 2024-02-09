/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from "react";
import {TiArrowSortedUp, TiArrowSortedDown} from "react-icons/ti";
import { TbBuildingEstate } from "react-icons/tb";
import demo from "../../assets/prop-bg.jpg";
import Banner from "../banner/Banner";
import bgCover from '../../assets/build.jpg'
import "./Property.css";
import { useNavigate } from "react-router-dom";
import { database } from "../../firebase";
import Card from "../propCard/Card";
import FilterCard from "../filterCard/FilterCard";
import Loading from "../loading/Loading";
import TextBanner from "../banner/TextBanner";
const Property = () => {
	const [property ,setProperty] =useState([])
	const [loading,setLoading] = useState(true)
	const head="Find Your Perfect Space: Discover Our PG/Flat for Rent Services!"
	const subHead="Make yourself at home with our PG/flat for rent services! Whether you're a student, a young professional, or someone new to the city, we offer comfortable and affordable accommodation options to suit your needs "
	
	const navigate=useNavigate()
	const getData = async () => {
		try {
			let temp = [];
			const snapshot = await database.property.get();
			snapshot.forEach((doc) => {
			temp.push({ ...doc.data() });
			});
			setProperty(temp);
			setLoading(false);
		} catch (error) {
			console.error("Error fetching data:", error);
			// Handle the error, e.g., set an error state
			setLoading(false);
		}
	};

	useEffect(() => {
		getData();
	}, []);	
	const sortByPrice = () => {
		const temp = property.toSorted((a, b) => a.price - b.price);
		setProperty(temp);
	};
	
	const sortByPriceDesc = () => {
		const temp = property.toSorted((a, b) => b.price - a.price);
		setProperty(temp);
	};
	
	return (
		<>
		{
			loading ?<Loading/>:
			<div>
				{/* <Banner text={"Reimagine your Home"}  imageUrl={bgCover}/> */}
				<TextBanner head={head} subHead={subHead} />
				<div className="prop-cont my-20 px-2 md:px-24">
					<div className="left-cont   top-0">
						<FilterCard className='sticky top-0'  setProperty={setProperty}  />
					</div>
					<div className="">
						<div className="content-head flex justify-between">
							<div>All results {property&&property.length}</div>
							<div className="sort-cont flex items-center">
								<h5>Price</h5>
								<div className="sort-action-btn flex  flex-col text-xl">
									<TiArrowSortedUp
										onClick={sortByPrice}
									/>
									<TiArrowSortedDown
										onClick={sortByPriceDesc}
									/>
								</div>
							</div>
						</div>
						<div className="">
							{property&&property.map((item) => (
								<div key={item.Pid}>
									<Card item={item} />
								</div>
							))}
						</div>
					</div>
				</div>
			</div>		
		}
		</>
	);
};

export default Property;
