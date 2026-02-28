import './styles.scss';
import { useState, useEffect, useRef } from "react";
const Footer = () => {
    const [visible, setVisible] = useState(false);
    const footerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setVisible(true); },
            { threshold: 0.1 }
        );
        if (footerRef.current) observer.observe(footerRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <footer className="footer-root" ref={footerRef}>
            <div className="footer-top-bar" />

            <div className="footer-main">
                {/* Brand */}
                <div className={`footer-col ${visible ? "show" : ""}`}>
                    <div className="brand-name">Shree Chamunda Krupa<br />Furniture & Aluminum Works</div>
                    <div className="brand-tagline">Crafting excellence since decades</div>
                    <div className="gold-line" />
                    <p className="brand-desc">
                        We design and deliver premium custom furniture and precision aluminum solutions tailored for homes and offices. Every piece reflects our commitment to quality craftsmanship.
                    </p>
                </div>

                {/* Contact */}
                <div className={`footer-col ${visible ? "show" : ""}`}>
                    <div className="col-heading">Contact Us</div>
                    <div className="col-heading-line" />

                    <div className="contact-item">
                        <div className="contact-icon">📍</div>
                        <div className="contact-text">
                            <span className="contact-label">Location</span>
                            Gandhinagar, Jamnagar<br />Gujarat, India
                        </div>
                    </div>

                    <div className="contact-item">
                        <div className="contact-icon">📞</div>
                        <div className="contact-text">
                            <span className="contact-label">Call Us</span>
                            <a href="tel:+918849953614">+91 88499 53614</a> (Keval Gajjar)<br />
                            <a href="tel:+919879077023">+91 98790 77023</a> (Rahul Maru)
                        </div>
                    </div>

                    <div className="contact-item">
                        <div className="contact-icon">✉️</div>
                        <div className="contact-text">
                            <span className="contact-label">Email</span>
                            <a href="mailto:CKAluminium@gmail.com">CKAluminium@gmail.com</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="ornament">✦ &nbsp; ✦ &nbsp; ✦</div>

            <div style={{ borderTop: "1px solid #1e1e1e" }}>
                <div className="footer-bottom">
                    <div className="footer-copy">
                        © 2026 <span>Shree Chamunda Krupa Furniture & Aluminum Works</span>. All Rights Reserved.
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;