import { useState } from 'react'
import { useEffect } from 'react';
import Swal from 'sweetalert2';

import './App.css'

function App() {
 
    const [data, setData]=useState({});
    const [submit, setSubmit]=useState(false);
    
    function handleChange(e)
    {
      setData({...data, [e.target.name] : e.target.value})
    }

    function handleSubmit(e)
    {
      e.preventDefault();
      setSubmit(true)
      e.target.reset();
    }
    

    useEffect(() => {
      if(submit)
      {
        console.log('form data: ',data)
        // setSubmit(false)
      }
    
      
    }, [submit])
    
  return (


    
    <div className="flex  h-screen w-screen  items-center justify-center max-md:flex-col max-md:px-12 max-md:py-5 container bg-[#222222]">

      {
        submit && Swal.fire({
          title: "Good job!",
          text: "You clicked the button!",
          icon: "success"
        }).then(()=>{
          console.log("form data: ", data);
          setSubmit(false)})
      }
      <img src="./src/assets/CF4.jpg" alt="" className="rounded-bl-3xl w-[500px] aspect-square max-md:rounded-none"/>

        <div className="text-white bg-[#1f242d] py-14 flex flex-col items-center gap-6 px-9 rounded-tr-3xl justify-center">
          <h1 className="text-5xl font-bold text-white max-md:text-3xl">Contact Us</h1>
          <form action="" className="space-y-5" id="contactForm" onSubmit={handleSubmit}>
            <div className="flex gap-4">
              <div className="relative">

                <input type="text" id="name" name="name" className="w-full px-2 py-2 border-2 border-[#00ffff] rounded-lg focus:outline-none placeholder:pl-0" placeholder="Name" onChange={handleChange}/>
                  <div className="text-red-600 text-[12px] hidden" id="nameError">Name field must be filled</div>


              </div>
              <div>

              <input type="text" id="email" name='email'  className="w-full px-2 py-2 border-2 border-[#00ffff] rounded-lg focus:outline-none" placeholder="Email" onChange={handleChange} />
                  <div className="text-[12px] text-red-600 text-left hidden" id="emailError">Email is required</div>
              </div>
            </div>

            <div className="txt">

            <textarea name="msg" id="message" rows="7" className="w-full px-4 py-2 border-2 border-[#00ffff] focus:outline-none rounded-lg  placeholder:pl-0 resize-none" placeholder="Message" onChange={handleChange}></textarea>
              <div className="text-[12px] text-red-600 text-left hidden" id="messageError">Message is required</div>
            </div>

            <div className="text-center sub-box">
              <button type="submit" className="w-full bg-[#00ffff] text-[#333] font-semibold py-2 rounded-lg hover:bg-blue-600 transition tracking-wide cursor-pointer">Submit</button>
            </div>
          </form>
        </div>
    </div>
    
  )


}

export default App
