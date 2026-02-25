import './styles.scss';
import { FaHome } from "react-icons/fa";
import { motion } from "framer-motion";

const boxVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, ease: "easeOut" }
    }
};

const About = () => {
    return (
        <div className='about'>
            <motion.div className='about_title'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}>
                About Us
            </motion.div>

            <div className="about_wrapper">
                {[1, 2, 3, 4].map((item, index) => (
                    <motion.div
                        key={index}
                        className="about_box"
                        variants={boxVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false }}
                    >
                        <FaHome size={20} />
                        <div>
                            {index === 0 &&
                                `At CK Wooden & Aluminum, we specialize in creating modern, stylish, and functional interiors that transform everyday spaces into beautiful living environments...`}

                            {index === 1 &&
                                `Along with furniture, we offer high-quality aluminum and toughened glass work for residential and commercial projects...`}

                            {index === 2 &&
                                `With over 10 years of experience in the furniture and aluminum industry, we have successfully delivered projects across Gujarat...`}

                            {index === 3 &&
                                `From modern furniture solutions to advanced aluminum and toughened glass work, every project reflects our dedication to quality craftsmanship...`}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default About;