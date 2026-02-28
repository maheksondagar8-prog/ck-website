import './styles.scss';
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer_top">

                <div className="footer_left">
                    <div className="footer_left_header">Shree Chamunda Krupa Furniture & Aluminum Works</div>
                    <div className="footer_left_contain">
                        We provide custom furniture and aluminum solutions
                        for homes and offices.
                    </div>
                </div>

                <div className="footer_right">
                    <div className="footer_left_header">Contact Us</div>
                    <div className="footer_left_contain"> 📍 Gandhinagar , Jamnagar</div>
                    <div className="footer_left_contain"> 📞 +91 8849953614  ( Keval Gajjar)</div>
                    <div className="footer_left_contain"> 📞 +91 9879077023  ( Rahul Maru )</div>
                    <div className="footer_left_contain"> ✉  <a href="mailto:CKAlluminium@gmail.com">CKAlluminium@gmail.com</a></div>
                </div>

            </div>

            <div className="footer_copyright">
                © 2026 Shree Furniture & Aluminum Works. All Rights Reserved.
            </div>
        </footer>
    )
}
export default Footer;