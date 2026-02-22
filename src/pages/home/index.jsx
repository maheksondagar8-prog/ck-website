import './styles.scss';
import Sofa1 from '../../assets/sofa-1.jpg';

const Home = () =>{
    return (
        <div className='home'>
            <div className='home_mainImg'>
                <img src={Sofa1}></img>

                <div className='home_title'>
                    <div>Where Timeless Furniture Meets Precision Aluminum.</div>
                </div>
            </div>
        </div>
    )
}

export default Home;