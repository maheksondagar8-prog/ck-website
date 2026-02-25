import './styles.scss';
import { motion } from "framer-motion";

const cardVariants = {
    hidden: (direction) => ({
        opacity: 0,
        x: direction === "left" ? -60 : 60,
    }),
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, ease: "easeOut" },
    },
};

const Services = () => {
    return (
        <div className='services'>
            <motion.div
                className='services_main_title'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false }}
            >
                Our Services
            </motion.div>

            <div className="services_content">
                <motion.div
                    className="services_card"
                    custom="left"
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                >
                    <div className="services_content_title">Modern Furniture Solutions</div>
                    <div className="services_content_sub_title">
                        We design and manufacture all types of modern furniture, including:
                    </div>
                    <ul>
                        <li>Modular kitchens</li>
                        <li>Bedroom furniture & wardrobes</li>
                        <li>Hall & living room interiors</li>
                        <li>Designer mandir & TV units</li>
                        <li>Storage solutions</li>
                        <li>Custom furniture with lighting and color finishes</li>
                        <li>Custom POP Work</li>
                    </ul>
                </motion.div>

                <motion.div
                    className="services_card"
                    custom="right"
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <div className="services_content_title">
                        Aluminum & Toughened Glass Work
                    </div>
                    <div className="services_content_sub_title">
                        We provide complete aluminum and toughened glass solutions such as:
                    </div>
                    <ul>
                        <li>Aluminum windows & doors</li>
                        <li>Office partitions</li>
                        <li>Toughened glass installations</li>
                        <li>Custom aluminum fabrication projects</li>
                    </ul>
                </motion.div>
            </div>
        </div>
    );
};

export default Services;