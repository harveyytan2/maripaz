import React from 'react'

function Contact() {
  return (
    <>
      <section className="body">
        <h1>Contact Us:</h1>
        <div className="contact-content">
            <div className="form-content">
                <h3>Message: </h3>
                <form className="contact-form">
                    <input type="text" placeholder="Name" required/>
                    <input type="email" placeholder="Email" id="" required/>
                    <textarea name="" id="" cols="30" rows="10" placeholder="Write a message" required></textarea>
                    <button className="submit-btn">Submit</button>
                </form>
            </div>
            <div className="map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d30978.371238566135!2d121.11547680886825!3d13.940948835834904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sL.%20Dimayuga%20Street%2C%20Lipa%2C%20Batangas!5e0!3m2!1sen!2sph!4v1701248325976!5m2!1sen!2sph" width="600" height="450" style={{border: 0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
      </section>
    </>
  )
}

export default Contact
