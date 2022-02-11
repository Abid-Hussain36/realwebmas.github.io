import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const AsiaShow = () => {
  const asiaData =[
    {
      countryName: "China",
      demographics: "The largest ethnic groups are Han Chinese (91%), Zhuang (1%), and Hui (1%).",
      language: "The official language is Mandarin Chinese.",
      festivals: "Popular festivals are Chinese New Year, Qingming festival, and Duanwu festival.",
      sources: "Asia Society, WorldAtlas, and Travel Triangle."
    },
    {
      countryName: "India",
      demographics: "The largest ethnic groups are Indo-Aryan (72%), Dravidian (25%), and Mongoloid/Other Minority Groups (3%).",
      language: "The official languages are Hindi and English.",
      festivals: "Diwali, Holi, and Maha Shivatri.",
      sources: "Travel Triangle, Career Power, and WorldAtlas."
    },
    {
      countryName: "Turkey",
      demographics: "The largest ethnic groups are Turks (73%), Kurds (13%), and Zaza Kurds (4%).",
      language: "The official language is Turkish.",
      festivals: "Popular festivals are Ramazan, Kadir Gecesi, and Cappadox.",
      sources: "Britannica, Travel Triangle, and WorldAtlas."
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
      {asiaData.map((data) => {
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
 
export default AsiaShow;