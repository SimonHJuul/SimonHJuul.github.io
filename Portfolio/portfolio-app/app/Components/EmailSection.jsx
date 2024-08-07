"use client";
import React, {useState} from 'react'
import GithubIcon from '../../public/github-icon.svg'
import LinkedInIcon from '../../public/linkedin-icon.svg'
import Link from 'next/link'
import Image from 'next/image'

const EmailSection = () => {
    const [emailSubmitted, setEmailSubmitted] = useState(false);

    const handleSubmit = async (e) => {
      e.preventDefault();
      const data = {
        email: e.target.email.value,
        subject: e.target.subject.value,
        message: e.target.message.value,
      };
      const JSONdata = JSON.stringify(data);
      const endpoint = "/api/send";
  
      // Form the request for sending data to the server.
      const options = {
        // The method is POST because we are sending data.
        method: "POST",
        // Tell the server we're sending JSON.
        headers: {
          "Content-Type": "application/json",
        },
        // Body of the request is the JSON data we created above.
        body: JSONdata,
      };
  
      const response = await fetch(endpoint, options);
      const resData = await response.json();
  
      if (response.status === 200) {
        console.log("Message sent.");
        console.log(resData);
        setEmailSubmitted(true);
      }
    };

  return (
    <section id="contact" className='grid md:grid-cols-2 my-12 md-my-12 py-24 gap-4 relative'>
        <div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2'></div>
        <div className='z-10'>
            <h5 className='text-xl font-bold text-white my-2'>Let&apos;s Connect</h5>
            <p className='text-[#ADB7BE] mb-4 max-w-md'>
                {""}
                I&apos;m always open to new projects, collaborations, or employment opportunities.
                Whether you have a question or just want to say hi, my inbox is always open.

            </p>
            <div className='socials flex flex-row gap-2'>
                <Link target="_blank" href='https://www.linkedin.com/in/simon-helsted-juul-8995251bb'>
                    <Image src={LinkedInIcon} alt='LinkedIn Icon' />
                </Link>
            </div>
        </div>
        
        {/* Form Section 
        <div>
            <form className='flex flex-col' onSubmit={handleSubmit}>
                <div className="mb-6">
                    <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">
                        Your email
                    </label>
                    <input
                        name='email'
                        type="email"
                        id="email"
                        required
                        className='bg-bg border-[#33353F] placeholder-[#9CA2A9] text-grey-100 text-sm rounded-lg blovk w-full p-2.5'
                        placeholder='johndoe@mail.com'
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="subject" className="text-white block mb-2 text-sm font-medium">
                        Subject
                    </label>
                    <input
                        name='subject'
                        type="text"
                        id="subject"
                        required
                        className='bg-bg border-[#33353F] text-white placeholder-[#9CA2A9] text-grey-100 text-sm rounded-lg blovk w-full p-2.5'
                        placeholder='Just saying hi'
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="message" className="text-white block mb-2 text-sm font-medium">
                        Your message
                    </label>
                    <textarea
                        name="message"
                        id="message"
                        required
                        className='bg-bg border-[#33353F] text-white placeholder-[#9CA2A9] text-grey-100 text-sm rounded-lg blovk w-full p-2.5'
                        placeholder="Let's talk about..."
                    />
                </div>
                <button
                    type='submit'
                    className='bg-primary hover:bg-secondary text-white font-medium py-2.5 px-5 rounded-lg w-full'
                >
                    Send Message
                </button>
                {
                    emailSubmitted && (
                        <p className='text-green-500 text-sm mt-2'>
                            Email sent successfully!
                        </p>
                    )
                }
            </form>
        </div>
        */}
    </section>
  )
}

export default EmailSection