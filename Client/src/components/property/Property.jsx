import React, {useState, useEffect} from "react";
import {TiArrowSortedUp, TiArrowSortedDown} from "react-icons/ti";
import {useDispatch, useSelector} from "react-redux";
import demo from "../../assets/prop-bg.jpg";
import Banner from "../banner/Banner";
import bgCover from '../../assets/build.jpg'
import {sortByPriceAsc, sortByPriceDsc} from "../../redux/slice/propertySlice";
import "./Property.css";
import axios from "axios";

import Card from "../propCard/Card";
import FilterCard from "../filterCard/FilterCard";
import Loading from "../loading/Loading";
const Property = () => {
	const [property ,setProperty] =useState([])
	const [loading,setLoading] = useState(true)
	let PropData=[]
	const getData = async () => {
		try {
			const res = await axios.get('http://localhost:5000/property');
			PropData = res.data.property;
			console.log(PropData);
			setProperty(PropData);
			setLoading(false);
		} catch (error) {
			console.error("Error fetching data:", error);
			// Handle the error, e.g., set an error state
			setLoading(false);
		}
	};


	const data = useSelector((state) => state.property);
	useEffect(() => {
		getData();
	}, []);	
	const dispatch = useDispatch();
	const sortByPrice = () => {
		const temp = [...property].toSorted((a, b) => a.price - b.price);
		setProperty(temp);
	};
	
	const sortByPriceDesc = () => {
		const temp = [...property].toSorted((a, b) => b.price - a.price);
		setProperty(temp);
	};

	return (
		<>
		{
			loading ?<Loading/>:
			<div>
				<Banner text={"Reimagine your Home"}  imageUrl={bgCover}/>
				<div className="prop-cont my-20 px-2 md:px-24">
					<div className="left-cont   top-0">
						<FilterCard className='sticky top-0' property={property} setProperty={setProperty}  />
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
								<div key={item._id}>
									<Card item={item} imageUrl={demo} />
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
