import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const AussieShow = () => {
  const aussieData =[
    {
      countryName: "Australia",
      demographics: "88% are Native Spaniards",
      culture: "5 meal system",
      food: "eat lots of pasta (non)"
    },
    {
      countryName: "New Zealand",
      demographics: "90% are Germans",
      culture: "no meal system",
      food: "dismal"
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