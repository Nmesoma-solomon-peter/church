import React from 'react'
import './Contactrow.css'

function Contactrow() {
  return (
    <div>
      <div className="row ">
        <div className="col col-md-6  bg-primary">
          <div className='container-fluid contact_box'>
            <form>
              <div className="mb-3">
                <label className="form-label">Your Name</label>
                <input type="text" className="form-control"  name='name' />
              </div>
              <div className="mb-3">
                <label className="form-label">Your Email</label>
                <input type="email" className="form-control"  name='email' />
              </div>

              <div className="mb-3">
                <label className="form-label">Example textarea</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows={3}></textarea>
              </div>
              <button type="submit" className="btn btn-secondary">Send</button>
            </form>







          </div>
        </div>
        <div className="col col-md-6  bg-primary">
          <div className='container-fluid contact_box '>
            <div className='getheading'>Get in touch with us today!</div>
            <div className='contacts mb-4'> 196 - 198 Ohanku Road Aba, Abia State , Nigeria</div>
            <div className='contacts'> Email: sdaciheorjiumuogele@gmail.com</div>
            <div className='contacts mb-5'> Phone: 08100000000</div>

            <div className="follow">Follow us on:</div>
            <div className="socials">
              <i className="bi social_icon bi-facebook"></i>
              <i className="bi social_icon bi-youtube"></i>
              <i className="bi social_icon bi-instagram"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contactrow