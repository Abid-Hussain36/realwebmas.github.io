import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const SAmericaShow = () => {
  const sAmerData =[
    {
      countryName: "Brazil",
      demographics: "The major ethnic groups are White (47.7%), Mulatto (43.1%), Black (7.6%), Asian (1.1%), indigenous (0.4%) in Brazil.",
      language: "The most spoken language of Brazil is Portuguese.",
      festivals: "Some prominent festivals are Lapinha, Festa de Iemanja, and Boi Bumba.",
      sources: "Index Mundi, iExplore",
    },
    {
      countryName: "Peru",
      demographics: "The major ethnic groups are Mestizo (60.2%), Amerindian (25.8%), White (5.96%), African Descent (3.6%), and other ethinic groups (1.2%) in Peru.",
      language: "The most spoken language of Peru is Spanish.",
      festivals: "Some prominent festivals are Peruvian Paso Horse Festival, Inti Raymi, and Carnival.",
      sources: "Index Mundi, iExplore",
    },
    {
      countryName: "Guyana",
      demographics: "The major ethnic groups are East Indian (39.8%), African Descent (29.3%), Mixed (19.9%), Amerindian (10.5%), and other ethinic groups (0.5%) in Guyana.",
      language: "The most spoken language of Guyana is English.",
      festivals: "Some prominent festivals are Mashramani, Diwali, and Christmas.",
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
      {sAmerData.map((data) => {
        return(
          <div className="outer">
            <div className="countryName">
              <p>{data.countryName}</p>
            </div>

            <div>
              <p className="exText">Demographics: {data.demographics}</p>
            </div>
            <div>
              <p className="exText">Language: {data.language}</p>
            </div>
            <div>
              <p className="exText">Festivals: {data.festivals}</p>
            </div>
            <div>
              <p className="exText">Sources: {data.sources}</p>
            </div>

          </div>
        )
      })}
    </Slider>
  );
}
 
export default SAmericaShow;