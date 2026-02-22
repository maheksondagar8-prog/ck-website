import './styles.scss';
import { FaHome } from "react-icons/fa";
import { motion } from "framer-motion";
const About = () => {
    return (
        <div className='about'>
            <motion.div className='about_title'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}>
                About Us
            </motion.div>

            <div className='about_content'>
                <div><FaHome size={20} /></div>
                <div>At CK Wooden & Aluminum, we specialize in creating modern, stylish, and functional interiors that transform everyday spaces into beautiful living environments. With a passion for craftsmanship and attention to detail, we deliver customized furniture and aluminum solutions tailored to our clients’ needs.
                    From modern kitchens and elegant bedrooms to stylish halls and designer mandirs, we provide complete furniture solutions with premium finishes, creative color combinations, and elegant lighting work. Every project is designed to combine comfort, durability, and contemporary style.
                </div>
            </div>
            <div className='about_content'>
                <div><FaHome size={20} /></div>
                <div>
                    Along with furniture, we offer high-quality aluminum and toughened glass work for residential and commercial projects. Our expertise includes safety doors, aluminum partitions, windows, railings, and customized glass installations that enhance both security and aesthetics.
                    We believe in quality materials, skilled workmanship, and timely project completion ensuring customer satisfaction in every project we deliver.</div>
            </div>

            <div className='about_content'>
                <div><FaHome size={20} /></div>
                <div>
                    With over 10 years of experience in the furniture and aluminum industry, we have successfully delivered high-quality residential and commercial projects across Gujarat. Our expertise and commitment to excellence have allowed us to complete numerous large-scale and custom projects in major cities such as Ahmedabad, Rajkot, Gandhinagar, and many other locations throughout the state.</div>
            </div>

            <div className='about_content'>
                <div><FaHome size={20} /></div>
                <div>
                    From modern furniture solutions to advanced aluminum and toughened glass work, every project reflects our dedication to quality craftsmanship, durability, and modern design. Our long-standing experience enables us to understand client requirements clearly and deliver results that exceed expectations.</div>
            </div>
        </div>
    )
}

export default About;