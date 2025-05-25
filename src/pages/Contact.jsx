import ImgContact from '../assets/pict-contact.svg'
import { toast } from "react-hot-toast";
import emailjs from '@emailjs/browser'
// import { useNavigate } from "react-router-dom";

const Contact = () => {
    // const navigate = useNavigate();
    const sendEmail = (e) => {
      e.preventDefault();
      console.log("SERVICE:", import.meta.env.VITE_SERVICE_ID,);
      console.log("TEMPLATE:", import.meta.env.VITE_TEMPLATE_ID);
      console.log("PUBLIC:", import.meta.env.VITE_PUBLIC_KEY);
    
      emailjs
        .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
        )
        .then(() => {
          toast.success("Message sent!");
          e.target.reset();
        })
        .catch(() => {
          toast.error("Failed to send message. Try again!");
        });
    };
    

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#4E2A1E] p-6 md:p-12">
    {/* Image */}
    <div className="w-full md:w-1/2 flex items-center justify-center mb-8 md:mb-0">
      <img
        src={ImgContact}
        alt="Flowers"
        className="rounded-xl shadow-lg max-w-full h-auto"
      />
    </div>
  
    {/* Contact Form */}
    <div className="w-full md:w-1/2 flex flex-col justify-center px-4 md:px-12">
      {/* Title */}
      <h1 className="text-5xl text-[#FFF5E3] font-light font-serif mb-2">
        Get in <span className="italic font-normal">touch</span>
      </h1>
      <p className="text-[#FFF5E3] mb-8">
        Contact us to inquire about the beauty of Bouquet flowers
      </p>
  
      <form className="space-y-6" onSubmit={sendEmail}>
        {/* First and Last Name */}
        <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
          <input
            type="text"
            placeholder="Full Name"
            required
            name="from_name"
            className="w-full rounded-md bg-[#FFF5E3] text-[#4E2A1E] py-3 px-4 placeholder:text-[#B19788]"
          />
        </div>
  
        {/* Email and Phone */}
        <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
          <input
            type="email"
            placeholder="Email"
            required
            name="email_from"
            className="w-full rounded-md bg-[#FFF5E3] text-[#4E2A1E] py-3 px-4 placeholder:text-[#B19788]"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            required
            name="number_from"
            className="w-full rounded-md bg-[#FFF5E3] text-[#4E2A1E] py-3 px-4 placeholder:text-[#B19788]"
          />
        </div>
  
        {/* Message */}
        <div>
          <label className="text-[#FFF5E3] font-semibold mb-2 block">Message</label>
          <textarea
            placeholder="Message"
            name='message'
            className="w-full rounded-md bg-[#FFF5E3] text-[#4E2A1E] py-3 px-4 placeholder:text-[#B19788] min-h-[150px]"
          />
        </div>
  
        {/* Button */}
        <button
          type="submit"
          className="bg-[#FFC457] lg:w-fit w-full cursor-pointer text-[#4E2A1E] py-3 px-6 rounded-md font-semibold hover:bg-[#eab647] transition"
        >
          Send Message
        </button>
      </form>
    </div>
  </div>  

  )
}

export default Contact
