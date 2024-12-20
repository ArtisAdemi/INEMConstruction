import React, { useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import project5 from "../assets/contact.jpg";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Real-time validation
    let error = "";
    if (name === "email") {
      if (!value) {
        error = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(value)) {
        error = "Email address is invalid";
      }
    } else if (!value) {
      error = `${name.charAt(0).toUpperCase() + name.slice(1)} is required`;
    }

    setErrors({
      ...errors,
      [name]: error,
    });
  };

  const validateForm = () => {
    let valid = true;
    const errors = {
      name: "",
      email: "",
      subject: "",
      message: "",
    };

    if (!formData.name) {
      errors.name = "Name is required";
      valid = false;
    }

    if (!formData.email) {
      errors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email address is invalid";
      valid = false;
    }

    if (!formData.subject) {
      errors.subject = "Subject is required";
      valid = false;
    }

    if (!formData.message) {
      errors.message = "Message is required";
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        await axios.post("/api/mail", {
          subject: formData.subject,
          html: `
                        <p><strong>Name:</strong> ${formData.name}</p>
                        <p><strong>Email:</strong> ${formData.email}</p>
                        <p><strong>Message:</strong> ${formData.message}</p>
                    `,
        });
        swal("Success", "Email sent successfully", "success");
      } catch (error) {
        swal("Error", `Error sending email: ${error}`, "error");
      }
    }
  };

  return (
    <div>
      <div className="h-[300px] relative">
        <img src={project5} alt="Contact" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Semi-transparent overlay */}
        <div className="absolute top-1/2 inset-x-0 text-center text-white transform -translate-y-1/2">
          <h1 className="text-4xl font-bold">Contact</h1>
        </div>
      </div>
      <div className="text-center py-12 px-[8%] xl:px-[16%]">
        <div className="flex flex-col items-center">
          <h2 className="">Que vous ayez un projet de grande envergure ou une idée qui nécessite une touche de maçonnerie artistique, nous sommes là pour vous. Contactez nous pour discuter de vos besoins, demander un devis ou simplement en savoir plus sur notre entreprise de maçonnerie de qualité.</h2>
          <div className="flex flex-col lg:flex-row justify-center mt-8 space-y-2 lg:space-y-0 lg:space-x-16 w-full lg:w-[100%]">

            <div className="bg-[#252525] text-white p-3 ml-0 w-full lg:w-1/3">
              <div className="text-[#439C91] text-2xl lg:text-4xl mb-4">📧</div>
              <h4 className="lg:text-xl text-[#439C91] font-bold">Écrivez nous!</h4>
              <p className="text-[#439C91]">inemconstructions@gmail.com</p>
            </div>
            <div className="bg-[#252525] text-white p-3 ml-0 w-full lg:w-1/3">
              <div className="text-[#439C91] text-2xl lg:text-4xl mb-4">📞</div>
              <h4 className="lg:text-xl text-[#439C91] font-bold">Appelez nous!</h4>
              <p className="text-[#439C91]">07-87-30-05-05</p>
            </div>
          </div>
        </div>
        <div className="mt-8 flex justify-center">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44662.41430173495!2d5.233521677536256!3d45.60258714619436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478b2e77fa39af5f%3A0x408ab2ae4be7fa0!2s38300%20Bourgoin-Jallieu%2C%20France!5e0!3m2!1sen!2s!4v1730375720880!5m2!1sen!2s" className="w-full h-[400px]" loading="lazy"></iframe>
        </div>
      </div>
      <div className="mt-8 px-[8%] xl:px-[16%]">
        <h2 className="text-2xl font-bold">Contactez nous</h2>
        <form className="mt-4 space-y-4 py-6" onSubmit={handleSubmit}>
          <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:!space-x-4">
            <div className="w-full lg:w-1/3">
              <input type="text" name="name" placeholder="Nom" className="w-full bg-transparent p-2 border border-gray-300" value={formData.name} onChange={handleChange} autoComplete="off" />
              {errors.name && <p className="text-red-500">{errors.name}</p>}
            </div>
            <div className="w-full lg:w-1/3">
              <input type="email" name="email" placeholder="Email" className="w-full bg-transparent p-2 border border-gray-300" value={formData.email} onChange={handleChange} autoComplete="off" />
              {errors.email && <p className="text-red-500">{errors.email}</p>}
            </div>
            <div className="w-full lg:w-1/3">
              <input type="text" name="subject" placeholder="Objet" className="w-full p-2 border border-gray-300" value={formData.subject} onChange={handleChange} />
              {errors.subject && <p className="text-red-500">{errors.subject}</p>}
            </div>
          </div>
          <div>
            <textarea name="message" placeholder="Message" className="w-full p-2 border border-gray-300 h-40" value={formData.message} onChange={handleChange} autoComplete="off"></textarea>
            {errors.message && <p className="text-red-500">{errors.message}</p>}
          </div>
          <div className="text-right">
            <button type="submit" className="bg-[#439C91] hover:opacity-80 rounded-md text-white px-4 py-2 font-bold">
              Envoyez votre message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
