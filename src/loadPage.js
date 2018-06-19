import loadBanner from "./banner";
import loadHeader from "./header";
import home from "./home";

const loadPage = () => {
    
    loadBanner();
    loadHeader();
    home();

};

export default loadPage;