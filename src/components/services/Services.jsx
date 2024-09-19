import React from 'react'
import { Link } from 'react-router-dom';


const Services = () => {

    const estate = {
        image: "https://systemintegration.in/wp-content/uploads/2024/02/real-estate-solutions-bmv-system-integration.webp",
        title: "Residential Sales",
        ingredients: `At the heart of our business is a team of dedicated professionals with extensive experience in the real estate industry.`,
        description:
            "We help you find your dream home with personalized support throughout the buying process.",
        instructions: `Property Management:- Comprehensive management services to keep your property well-maintained and profitable. Commercial Real Estate:- Expert guidance in buying, selling, or leasing commercial properties. Property Valuation:- Accurate valuations to understand the true value of your property. Real Estate Consulting:- Tailored advice for informed real estate decisions, from market analysis to investment strategies.Real Estate Investment:- Assistance in finding profitable residential, commercial, or industrial investment opportunities." Legal Assistance:- Legal support for contracts, disputes, and all aspects of real estate transactions. Customized Marketing:- Targeted marketing plans to ensure your property gets noticed and sold quickly. Experience & Expertise:- With years of experience in the real estate industry, our team brings unmatched expertise to help you navigate the market with confidence. Innovative Solutions:- We leverage the latest technology and marketing strategies to enhance your real estate experience, whether buying, selling, or investing. Transparency:- We believe in open communication and full transparency in all transactions, so you can trust every step of the process.`,
    };
  return (
    <div className="w-[80%] m-auto p-5 py-[8%]">
    <Link to="/recipes" class="text-3xl ri-arrow-left-line"></Link>
    <div className="details w-full flex h-[75vh]  mt-3">
        <div className="dets w-[50%] p-[4%]  shadow">
            <img className="" src={estate.image} alt="" />
            <h1 className="text-xl mb-5 mt-[10%] text-center">
                {estate.title}
            </h1>
           
            <p className="text-zinc-400 text-[1vw]">{estate.description}</p>
            <div className="flex justify-between py-10 px-4">
                <Link
                    to="/update"
                    className="text-blue-400 border-blue-400 border py-2 px-5"
                >
                    Update
                </Link>
                <Link className="text-red-400 border-red-400 border py-2 px-5">
                    Delete
                </Link>
            </div>
        </div>
        <div className="desc w-[50%] px-[5%] py-[3%] overflow-auto">
            <h1 className="text-3xl border-b border-green-600 text-green-600">
                Ingredients
            </h1>
            <ul className="text-zinc-600 list-disc  p-3 ">
                {estate.ingredients.split(",").map((d, i) => (
                    <li className="list-item text-sm  mb-2" key={i}>
                        {d}
                    </li>
                ))}
            </ul>
            <h1 className="text-3xl border-b border-green-600 text-green-600">
                Instructions
            </h1>
            <ul className="text-zinc-600 list-decimal  p-3 ">
                {estate.instructions.split(".").map((d, i) => (
                    <li className="list-item text-sm  mb-2" key={i}>
                        {d}
                    </li>
                ))}
            </ul>
        </div>
    </div>
</div>
  )
}

export default Services