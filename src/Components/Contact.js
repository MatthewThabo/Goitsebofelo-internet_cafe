import React, { useState } from 'react';

const Contact = ({ data }) => {
   const [url, setUrl] = useState('mailto:test@example.com?subject=subject&body=body');
   const [name, setName] = useState('');
   const [subject, setSubject] = useState('');
   const [email, setEmail] = useState('');
   const [message, setMessage] = useState('');

   console.log(data)

    const handleClick = (e) => {
       e.preventDefault();
      window.open(`mailto:${email}?subject=${subject}&body=${name}: ${message}`);
    }
    

    return (
      <section id="contact">

         <div className="row section-head">

            <div className="two columns header-col">

               <h1><span>Get In Touch.</span></h1>

            </div>

            <div className="ten columns">

                  <p className="lead">{data?.message}</p>

            </div>

         </div>

         <div className="row">
            <div className="eight columns">
                  <h4>Operating Hours</h4>
					   <p className="address">
						   {data?.hours.M} <br />
						   {data?.hours.T} <br />
                     {data?.hours.W} <br />
                     {data?.hours.Th} <br />
                     {data?.hours.F} <br />
                     {data?.hours.S} <br />
					   </p>
           </div>


            <aside className="four columns footer-widgets">
               <div className="widget widget_contact">

					   <h4>Address and Phone</h4>
					   <p className="address">
						   {data?.address.street} <br />
						   {data?.address.city}, {data?.address.state} {data?.address.zip}<br />
                     <span>{data?.email}</span><br />
						   <span>{data?.phone}</span>
					   </p>
				   </div>

               <div className="widget widget_tweets">

		         </div>
            </aside>
      </div>
   </section>
    );
}

export default Contact;
