import { useState } from 'react'
import { useEffect } from 'react';
import Swal from 'sweetalert2';

import './App.css'

function App() {
 
    const [data, setData]=useState({
      name: "",
      email: "",
      msg: "",
    });
    const [submit, setSubmit]=useState(false);
    const [errors, setErrors] = useState({});
    
       
  useEffect(() => {
    if (submit) {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success",
      }).then(() => {
        console.log("form data: ", data);
        setSubmit(false);
        setData({ name: "", email: "", msg: "" }); // ✅ Reset form data after success
      });
    }
  }, [submit]);

    const validateForm = () => {
      let tempErrors = {};

      if (!data.name.trim()) {
        tempErrors.name = "Name is required";
      } else if (data.name.length < 3) {
        tempErrors.name = "Name must be at least 3 characters";
      }

      if (!data.email.trim()) {
        tempErrors.email = "Email is required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
        tempErrors.email = "Invalid email format";
      }

      
      if (!data.msg.trim()) {
        tempErrors.msg = "Message is required";
      } else if (data.msg.length < 10) {
        tempErrors.msg = "Message must be at least 10 characters";
      }

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    function handleChange(e) {
      setData({ ...data, [e.target.name]: e.target.value })
    }
    function handleSubmit(e) {
      e.preventDefault();
      if (validateForm()) {
        setSubmit(true); 
      }
    }
              
    return (


    
    <div className="flex  h-screen w-screen  items-center justify-center max-md:flex-col max-md:px-12 max-md:py-5 container bg-[#222222]">

      {/* {
        
      } */}
      <img src="image.jpg" alt="" className="rounded-bl-3xl w-[500px] aspect-square max-md:rounded-none"/>

        <div className="text-white bg-[#1f242d] py-14 flex flex-col items-center gap-6 px-9 rounded-tr-3xl justify-center">
          <h1 className="text-5xl font-bold text-white max-md:text-3xl">Contact Us</h1>
          <form action="" className="space-y-5" id="contactForm" onSubmit={handleSubmit}>
            <div className="flex gap-4">
              <div className="relative">

              <input type="text" id="name" name="name" className="w-full px-2 py-2 border-2 border-[#00ffff] rounded-lg focus:outline-none placeholder:pl-0" placeholder="Name" value={data.name}  onChange={handleChange}/>
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}


              </div>
              <div>

              <input type="text" id="email" name='email' className="w-full px-2 py-2 border-2 border-[#00ffff] rounded-lg focus:outline-none" placeholder="Email" value={data.email} onChange={handleChange} />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>
            </div>

            <div className="txt">

            <textarea name="msg" id="message" rows="7" className="w-full px-4 py-2 border-2 border-[#00ffff] focus:outline-none rounded-lg  placeholder:pl-0 resize-none" placeholder="Message" value={data.msg}  onChange={handleChange}></textarea>
            {errors.msg && <p className="text-red-500 text-sm">{errors.msg}</p>}
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
