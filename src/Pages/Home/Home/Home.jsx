import Featured from "../../../components/Featured/Featured";
import Banner from "../Banner/Banner";
import Categroy from "../Categroy/Categroy";
import PopularMenu from "../PopularMenu/PopularMenu";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categroy></Categroy>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
        </div>
    );
};

export default Home;