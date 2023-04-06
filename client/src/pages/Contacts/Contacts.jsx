import React from 'react';
import styles from './Contacts.module.scss';
import GoogleMap from './GoogleMap';

function Contacts(props) {

  const {
    sectionContact,
    pageContact,
    pageContactInfo,
    container,
    contactLeft,
    pageContactRight,
    contacTitle,
    contactDetail,
    formControl,
    sendBtn,
  } = styles;

  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <div className={sectionContact}>
      <div className={pageContact}>
        <GoogleMap />
        <div className={pageContactInfo}>
          <div className={container}>
            <div className={contactLeft}>
              <h1 className={contacTitle}>Contact Us</h1>
              <div className={contactDetail}>
                <p>
                  Nor again is there anyone who loves or pursues or desires to
                  obtain pain of itself, because it is pain.no annoying
                  consequences.
                </p>
                <p>
                  <strong>Add:&nbsp;</strong> No 40 Baria Sreet 133/2, Kyiv
                </p>
                <p>
                  <strong>Phone:</strong>&nbsp; (+380) 00 0000
                </p>
                <p>
                  <strong>Email:&nbsp;</strong> kyiv@example.com
                </p>
                <p>
                  <strong>Open:</strong>&nbsp; 8am - 7pm, Mon - Sat
                </p>
              </div>
            </div>
            <div className={pageContactRight}>
              <form onClick={handleClick}>
                <input
                  className={formControl}
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                />
                <input
                  className={formControl}
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
                <textarea
                  className={formControl}
                  placeholder="Message"
                  name="body"
                ></textarea>
                <input
                  //   onSubmit={(e) => message55(e)}
                  className={sendBtn}
                  type="submit"
                  value="Send Message"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
