import Masonry from "react-masonry-css";
import { motion } from "framer-motion";
import "./styles.scss";
import cupboard1 from "../../assets/cupboard-1.jpg";
import cupboard from "../../assets/cupboard.jpg";
import hall1 from "../../assets/hall-1.jpg";
import hall2 from "../../assets/hall-2.jpg";
import hall3 from "../../assets/hall-3.jpg";
import hall4 from "../../assets/hall-4.jpg";
import hall5 from "../../assets/hall-5.jpg";
import hall6 from "../../assets/hall-6.jpg";
import pop from "../../assets/pop.jpg";
import hall from "../../assets/hall.jpg";
import room1 from "../../assets/room-1.jpg";
import room2 from "../../assets/room-2.jpg";
import room3 from "../../assets/room-3.jpg";
import TV from "../../assets/TV.jpg";
import win from "../../assets/win.jpg";
import window1 from "../../assets/window-1.jpg";
import window2 from "../../assets/window-2.jpg";
import window3 from "../../assets/window-3.jpg";
import wooden1 from "../../assets/wooden-1.jpg";
import wooden from "../../assets/wooden.jpg";
import door from "../../assets/door.jpg";
import window4 from "../../assets/window-4.jpg";
import smallwin from "../../assets/small-win.jpg";
import video1 from "../../assets/video-1.mp4";

const media = [
    { type: "image", src: cupboard1 },
    { type: "image", src: cupboard },
    { type: "image", src: hall1 },
    { type: "image", src: hall2 },
    { type: "image", src: hall3 },
    { type: "image", src: hall4 },
    { type: "image", src: hall5 },
    { type: "image", src: hall6 },
    { type: "image", src: pop },
    { type: "image", src: hall },
    { type: "image", src: room1 },
    { type: "image", src: room2 },
    { type: "image", src: room3 },
    { type: "video", src: video1 },
    { type: "image", src: TV },
    { type: "image", src: win },
    { type: "image", src: window1 },
    { type: "image", src: window2 },
    { type: "image", src: window3 },
    { type: "image", src: wooden1 },
    { type: "image", src: wooden },
    { type: "image", src: door },
    { type: "image", src: window4 },
    { type: "image", src: smallwin },
];

const breakpointColumnsObj = {
    default: 4,
    1200: 3,
    768: 2,
    480: 1,
};

const Gallery = () => {
    return (
        <div className="gallery">

            <motion.div className='gallery__title'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}>
                Our Work Gallery
            </motion.div>

            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="gallery__grid"
                columnClassName="gallery__column"
            >
                {media.map((item, index) => (
                    <div key={index} className="gallery__item">
                        {item.type === "image" ? (
                            <img src={item.src} alt={`gallery-${index}`} loading="lazy" />
                        ) : (
                            <video
                                src={item.src}
                                controls
                                muted
                                preload="metadata"
                            />
                        )}
                    </div>
                ))}
            </Masonry>
        </div>
    );
};

export default Gallery;