import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const NAmericaShow = () => {
  const nAmerData =[
    {
      countryName: "C1",
      demographics: "88% are Native Spaniards",
      culture: "5 meal system",
      food: "eat lots of pasta (non)"
    },
    {
      countryName: "C2",
      demographics: "90% are Germans",
      culture: "no meal system",
      food: "dismal"
    },
    {
      countryName: "C3",
      demographics: "99% are Viking",
      culture: "700 meal system",
      food: "eat english noble guts"
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
    <Slider {...settings} className="outer">
      {nAmerData.map((data) => {
        return(
          <div >
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
 
export default NAmericaShow;