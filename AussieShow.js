import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const AussieShow = () => {
  const aussieData =[
    {
      countryName: "Australia",
      demographics: "There are English (25.9%), Australian (25.4%), Irish (7.5%), Scottish (6.4%), Italian (3.3%), German (3.2%), Chinese (3.1%), Dutch (1.2%), and other ethinic groups (15.8%), in Australia.",
      language: "The most spoken language of Australia is English.",
      festivals: "Some prominent festivals are Sydney Mardi Gras, Dreaming Festival, and Brisbane Festival.",
      sources: "Index Mundi, iExplore",
    },
    {
      countryName: "New Zealand",
      demographics: "There are European (64.1%), Maori (16.5%), Chinese (4.9%), Indian (4.7%), Samaoan (3.9%), Tongan (1.8%), Cook Islands Maori (1.7%), English (1.5%), Filipino (1.5%), New Zealander (1%), and other ethinic groups (13.7%) in New Zealand",
      language: "The most spoken language of New Zealand is English.",
      festivals: "Some prominent festivals are Bluff Oyster & Food Festival, Matariki Festival, and Rally New Zealand.",
      sources: "Index Mundi, iExplore",
    },
    {
      countryName: "Fiji",
      demographics: "There are iTaukei (56.8%), Indo-Fijian (37.5%), Rotuman (1.2%), and other ethinic groups (4.5%)",
      language: "The most spoken language of Fiji is English.",
      festivals: "Some prominent festivals are Outrigger International Competition, Honoring the Founder of Modern Fiji Festival, and Hibiscus Festival.",
      sources: "Index Mundi, iExplore",
    }
  ];

  const ArrowLeft = (props) => (
    <button {...props} className="arrowButtonL"/>
  );
  const ArrowRight = (props) => (
    <button {...props} className="arrowButtonR"/>
  );

  const settings = {
    dots: true,
    fade: true,
    infinite: true, 
    speed: 500,
    slidesToShow: 1,
    arrows: true,
    slidesToScroll: 1,
    className: "slides",
    prevArrow: <ArrowLeft/>,
    nextArrow: <ArrowRight/>
  }

  return (
    <Slider {...settings}>
      {aussieData.map((data) => {
        return(
          <div className="outer">
            <div>
              <h3>{data.countryName}</h3>
            </div>
            <div>
              <p>{data.demographics}</p>
            </div>
            <div>
              <p>{data.culture}</p>
            </div>
            <div>
              <p>{data.food}</p>
            </div>
          </div>
        )
      })}
    </Slider>
  );
}
 
export default AussieShow;
