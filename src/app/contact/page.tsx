// contact page
// import Label ,Input ,Button from shadcn library 
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
// import icons from react icon library
import { FaAddressCard, FaEnvelope, FaPhone} from "react-icons/fa6";
function ContactPage() {
  return (
    <div className="flex flex-col items-center justify-center mt-10 min-h-screen">
      <h1 className="font-bold text-center mb-5 text-4xl uppercase">Contact Me</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 justify-center items-center p-10 md:p-2 md:max-w-4xl">
        {/* Input Form styling */}
        <div className="bg-white p-4 border-solid border-2 rounded-lg shadow-md w-full">
          <form className="flex flex-col">
            <Label className="text-black mb-2">Name:</Label>
            <Input type="text" className="mb-4 p-2 border border-gray-300 rounded" placeholder="Your Name" required />
            
            <Label className="text-black mb-2">Email:</Label>
            <Input type="email" className="mb-4 p-2 border border-gray-300 rounded" placeholder="Your Email" required />
            
            <Label className="text-black mb-2">Message:</Label>
            <textarea className="p-2 border border-gray-300 rounded h-32" placeholder="Your Message" required></textarea>
            
            <Button type="submit" className="mt-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-600 uppercase">Send</Button>
          </form>
        </div>
        
        {/* Contact Details use icons with text */}
        <div className="bg-white p-4 border-solid border-2 rounded-lg w-full">
          <h2 className="text-black text-2xl mb-4">Address</h2>
          <p className="flex items-center gap-2 text-black">
            <FaAddressCard className="h-6 w-6" /> H.No B559 ShahTown,BinQasim,Karachi
          </p>
          <p className="flex items-center gap-2 text-black mt-2">
            <FaEnvelope className="h-6 w-6" /> Email: Karistina97@gmail.com
          </p>
        </div>
      </div>
      {/* Thank You Message */}
      <div className="text-center mt-2">
        <p className="text-black italic font-semibold mb-4 text-lg p-4">
          Thanks for visiting! I'm at your service and available anytime you need. </p>
      </div>
      {/* Footer, styling  */}
      <div className="bg-black w-full text-center py-1 mt-auto">
        <p className="text-white text-sm">
          © 2024 / Kristina, All Rights Reserved.
        </p>
      </div>
    </div>
  );
}
export default ContactPage;
