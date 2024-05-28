import Circles from "/components/Circles";
import { BsArrowRight } from "react-icons/bs";
import { useState } from "react";


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const createWhatsAppLink = () => {
    const { name, email, subject, message } = formData;
    const text = `Name: ${name}%0AEmail: ${email}%0ASubject: ${subject}%0AMessage: ${message}`;
    return `https://wa.me/62895703185218?text=${text}`;
  };
  

  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full overflow-y-auto">
        {/* text & form */}
        <div className="flex flex-col w-full max-w-[700px]">
          {/* text */}
          <h2 className="h2 text-center mb-8">
            Lets <span className="text-accent">connect.</span>
          </h2>
          {/* form */}
          <form className="flex-1 flex flex-col gap-6 w-full mx-auto">
            {/* input group */}
            <div className="flex gap-x-6 w-full">
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="subject"
              className="input"
              value={formData.subject}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="message"
              className="textarea"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <a
              href={createWhatsAppLink()}
              className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Lets talk
              </span>
              <BsArrowRight 
                className="-translate-y-1/4 opacity-0 group-hover:flex group-hover:-translate-x-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" 
              />
            </a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
