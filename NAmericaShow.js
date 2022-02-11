import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const NAmericaShow = () => {
  const nAmerData =[
    {
      countryName: "USA",
      demographics: "The major ethnic groups are White (72.4%), Black (12.6%), Asian (4.8%), Amerindian and Alaska Native (0.9%), Pacific Islander (6.8%), and other races (2.9%) in the United States of America",
      language: "The most spoken language of USA is English.",
      festivals: "Some prominent festivals are Halloween, Thanksgiving, and Christmas",
      sources: "Index Mundi, iExplore",
    },
    {
      countryName: "Mexico",
      demographics: "The major ethnic groups are Mestizo (62%), Amerindian (28%), and other races (10%) in Mexico",
      language: "The most spoken language of Mexico is Spanish.",
      festivals: "Some prominent festivals are Cinco De Mayo, Dia de Los Muertos, and Carnaval",
      sources: "Index Mundi, iExplore",
    },
    {
      countryName: "Canada",
      demographics: "The major ethnic groups are Canadian (32.3%), English (18.3%), Scottish (13.9%), French (13.6%), Irish (13.4%), German (9.6%), Chinese (5.1%), Italian (4.6%), North American Indian (4.4%), East Indian (4%), and other ethinic groups (51.6%) in Canada.",
      language: "The most spoken language of Canada is English.",
      festivals: "Some prominent festivals are Québec Winter Carnival, Winterlude, and Pacific Rim Whale Festival",
      sources: "Index Mundi, iExplore",
    }
  ];

  const ArrowLeft = (props) => (
    <div className="buttonPositionL">
      <button {...props} className="arrowButtonL"/>
    </div>
  );
  const ArrowRight = (props) => (
    <div className="buttonPositionR">
      <button {...props} className="arrowButtonR"/>
    </div>
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
      {nAmerData.map((data) => {
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
 
export default NAmericaShow;