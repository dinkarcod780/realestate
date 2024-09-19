import React from 'react'

const Property = () => {
  return (
    <div className='h-full w-full bg-[#dadada]'>
         <form className="w-[70%] m-auto ">
            <h1 className="text-7xl mt-5 font-extrabold text-green-600 mb-[5%]">
                Create <br /> Property
            </h1>


            <input
                type="text"
                className="w-full border rounded-md px-6 py-3 text-lg mb-5"
                placeholder="Title"
            />

            <input
                type="url"
                className="w-full border rounded-md px-6 py-3 text-lg mb-5"
                placeholder="Property Image URL"
            />
            
            <textarea
                className="w-full border rounded-md px-6 py-3 text-lg mb-5"
                placeholder="Peroperty description..."
            ></textarea>
            
            <input
                type="text"
                className="w-full border rounded-md px-6 py-3 text-lg mb-5"
                placeholder="Contact"
            />

            <div className="w-full text-right">
                <button className="rounded-md text-xl bg-green-600 text-white py-2 px-5 hover:bg-green-700 duration-200">
                    Create Peroperty &nbsp; &#8594;
                </button>
            </div>
        </form>
    </div>
  )
}

export default Property