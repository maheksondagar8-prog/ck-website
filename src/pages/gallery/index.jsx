import Masonry from "react-masonry-css";
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
const images = [
    cupboard1,
    cupboard,
    hall1,
    hall2,
    hall3,
    hall4,
    hall5,
    hall6,
    pop,
    hall,
    room1,
    room2,
    room3,
    TV,
    win,
    window1,
    window2,
    window3,
    wooden1,
    wooden,
    door,
    window4,
    smallwin
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
            <h2 className="gallery__title">Our Work</h2>

            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="gallery__grid"
                columnClassName="gallery__column"
            >
                {images.map((img, index) => (
                    <div key={index} className="gallery__item">
                        <img src={img} alt={`gallery-${index}`} loading="lazy" />
                    </div>
                ))}
            </Masonry>
        </div>
    );
};

export default Gallery;