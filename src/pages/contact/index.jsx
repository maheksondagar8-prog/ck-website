import './styles.scss';
import { BsInfoCircleFill } from 'react-icons/bs'
import emailjs from "emailjs-com";
import { useRef } from "react";

const Contact = () => {
    const formRef = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_etxv1xm",
                "template_p7m0lek",
                formRef.current,
                "4JYi2Qu2MwINrYNBH"
            )
            .then(
                (result) => {
                    alert("Message sent successfully!");
                    formRef.current.reset();
                },
                (error) => {
                    alert("Something went wrong!");
                }
            );
    };
    return (
        <section className="contact">

            <form
                ref={formRef}
                onSubmit={sendEmail}
                className="contact_content">

                <h3 className="contact_content_header-text">Let`s Talk</h3>
                <div className="contact_content_form_controlwrapper">
                    <div className="nameWrapper">
                        <input required name="name" className="inputName" type={'text'}></input>
                        <label htmlFor="name" className="nameLabel">Name</label>
                    </div>
                    <div className="emailWrapper">
                        <input required name="email" className="inputEmail" type={'email'}></input>
                        <label htmlFor="email" className="emailLabel">Email</label>
                    </div>
                    <div className="descriptionWrapper">
                        <textarea required name="description" className="inputDescription" type={'text'} rows={5}></textarea>
                        <label htmlFor="description" className="descriptionLabel">Description</label>
                    </div>
                </div>
                <button>Submit</button>
            </form>
        </section>
    )
}

export default Contact;