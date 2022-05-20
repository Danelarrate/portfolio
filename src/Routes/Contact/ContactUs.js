import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
function ContactUs() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_v2zx7ii",
        "template_93h4cq9",
        form.current,
        "eBv_INwm8RcPX5mR_"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const contatcDivStyle = {
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    padding: "4vh 2vw 4vh 2vw",
  };

  return (
    <main className="contact">
      <section style={contatcDivStyle}>
        <a
          href="https://www.linkedin.com/in/danelarrate/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillLinkedin
            style={{
              margin: "2.5vh 2.5vw 0vh 2.5vw",
              height: "10vh",
              width: "5vw",
              color: "white",
            }}
          />
        </a>
        <a
          href="https://wa.me/5491159065816"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoLogoWhatsapp
            style={{
              color: "#25D366",
              margin: "2.5vh 2.5vw 0vh 2.5vw",
              height: "10vh",
              width: "5vw",
            }}
          />
        </a>
      </section>
      <section style={contatcDivStyle}>
        <div
          style={{
            width: "80%",
            backgroundColor: "rgba(2,127,116,0.3)",
            height: "70%",
            padding: "4vh 2vw 4vh 2vw",
            borderRadius: "2vw",
          }}
        >
          <form ref={form} onSubmit={sendEmail}>
            <div className="form-group row">
              <label
                style={{ fontSize: "1.5vw" }}
                className="col-sm-2 col-form-label"
              >
                Name
              </label>
              <div className="col-sm-10">
                <input
                  style={{
                    width: "27vw",
                    height: "6vh",
                    margin: "1.5vh 0 0 0",
                  }}
                  className="form-control"
                  type="text"
                  name="nombre"
                  required
                />
              </div>
            </div>
            <div className="form-group row">
              <label
                style={{ fontSize: "1.5vw" }}
                className="col-sm-2 col-form-label"
              >
                Email
              </label>
              <div className="col-sm-10">
                <input
                  style={{
                    width: "27vw",
                    height: "6vh",
                    margin: "1.5vh 0 0 0",
                  }}
                  className="form-control"
                  type="email"
                  name="mail"
                  required
                />
              </div>
            </div>
            <div className="form-group row">
              <label
                style={{ fontSize: "1.5vw" }}
                className="col-sm-2 col-form-label"
              >
                Phone Number
              </label>
              <div className="col-sm-10">
                <input
                  className="form-control"
                  type="tel"
                  name="user_phone"
                  style={{
                    width: "27vw",
                    height: "6vh",
                    margin: "1.5vh 0 0 0",
                  }}
                />
              </div>
            </div>
            <div className="form-group row">
              <label
                className="col-sm-2 col-form-label"
                style={{ fontSize: "1.5vw" }}
              >
                Message
              </label>
              <div className="col-sm-10">
                <textarea
                  style={{
                    width: "27vw",
                    height: "10vh",
                    margin: "1.5vh 0 0 0.1vw",
                  }}
                  className="form-control"
                  name="message"
                />
              </div>
            </div>
            <div
              className="form-group row"
              style={{ justifyContent: "center" }}
            >
              <button className="fancy-btn contact-button">
                <input
                  type="submit"
                  value="Send"
                  style={{ border: "none", backgroundColor: "white" }}
                />
                <AiOutlineMail />
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

export default ContactUs;
