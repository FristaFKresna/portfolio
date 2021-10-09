import AboutContent from "./component/about/about";
import Contact from "./component/contact/contact";
import ContentWeb from "./component/content";
import FooterPorto from "./component/footer";
import NavigationBar from "./component/navbar";
import Portfolio from "./component/portfolio/portfolio";
import SkillContent from "./component/skill/skill";
import { Element } from 'react-scroll';

function App() {
  return (
    <div style={{backgroundColor:'#FFF3EC'}}>
      <NavigationBar/>
      <Element name="home" >
        <ContentWeb/>
      </Element>

      <Element name="about" >
      <AboutContent/> 
      </Element>

      <Element name="skill" >
      <SkillContent/>
      </Element>

      <Element name="portfolio" >
      <Portfolio/>
      </Element>
      {/* contact bikin eror navbar benerin css nya */}
      <Element name="contact" >
      <Contact/>
      </Element>
      <FooterPorto/>
    </div>
  );
}

export default App;


// #BB2326 
//   #FFF3EC 
//   #669AB3 
//   #325B6F