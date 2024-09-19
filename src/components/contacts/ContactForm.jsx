import React from 'react'

const ContactForm = () => {
  return (
        
    <div className='h-[100vh] w-[100%] '>
        <div className='formpage h-[80vh] w-full ' >
    <form className="w-[50%] m-auto    ">
       {/* <h1 className="text-7xl mt-5 font-extrabold text-green-600 mb-[5%]">
          
       </h1> */}


       <input
           type="text"
           className="w-full border-2  px-6 py-3 text-lg mb-5 rounded-[17px]"
           placeholder="Name" name='name'
       />

       <input
           type="email"
           className="w-full border-2 rounded-[17px] px-6 py-3 text-lg mb-5"
           placeholder="Email" name='email'
       />
       
       <input
           type="text"
           className="w-full border-2 rounded-[17px] px-6 py-3 text-lg mb-5"
           placeholder="Subject" name='subject'
       />

       <input
           type="text"
           className="w-full border-2 rounded-[17px] px-6 py-3 text-lg mb-5"
           placeholder="Contact"
       />

       <textarea
           className="w-full border-2 rounded-[17px] px-6 py-3 text-lg mb-5"
           placeholder="Messsage..."
       ></textarea>
       
      

       <div className="w-full  text-center">
           <button className="rounded-md text-xl bg-green-600 text-white py-2 px-5 hover:bg-green-700 duration-200">
               Send Message &nbsp; &#8594;
           </button>
       </div>
   </form>
   </div>
</div>
  )
}

export default ContactForm