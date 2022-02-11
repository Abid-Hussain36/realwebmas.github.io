import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const EuroShow = () => {
  const euroData =[
    {
      countryName: "Spain",
      demographics: "There are Hispanic (84.8%), Moroccan (1.7%), Romanian (2.7%), and other ethinic groups (12.3).",
      language: "The official language of Spain is Spanish.",
      festivals: "Some prominent festivals are the San Sebastian Drum Festival, the San Cecelio Fiesta, and the Jerez Horse Fair",
      sources: "Index Mundi, iExplore",
    },
    {
      countryName: "Germany",
      demographics: "There are German (86.3%), Turkish (1.8%), Polish (1%), Syrian (1%), Romanian(1%), and other ethinic groups (8.9%).",
      language: "The official language of Germany is German",
      festivals: "Some prominent festivals are the Bruchsal Asparagus Festival, the Dresden Music Festival, and Oktoberfest.",
      sources: "Index Mundi, iExplore",
    },
    {
      countryName: "Norway",
      demographics: "There are Norwegian (83.2%), other European (8.3%), and other ethinic groups (8.5%)",
      language: "The official language of Norway is Norwegian",
      festivals: "Some prominent festivals are the Narvik Vinterfestuka, the Viking Festival, and the Peer Gynt Festival.",
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
      {euroData.map((data) => {
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
};
 
export default EuroShow;
