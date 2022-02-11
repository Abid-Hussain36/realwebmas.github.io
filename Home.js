import {Link} from "react-router-dom";

const Home = () => {
  return (
    <>
        <div className="homeTitle">
          <h1 className="homeTitleText">Welcome to the Unity Culture Festival</h1>
        </div>

        <div className="homeBox1">
          <table>
            <tr>
              <td className="textBox1">
                <div className="homeText1">
                  <p className="textStyle1">Want to Explore the Cultures of the World?</p>
                  <p className="textStyle2">Learn more about the citizens of various countries by visiting the <Link to="/ex" className="homeLink">Exhibition Hall</Link>.</p>
                </div>
              </td>
              <td className="imageBox1">
                <div className="homeImg1">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Holi_Festival_of_Colors_2013.jpg/640px-Holi_Festival_of_Colors_2013.jpg" width="100%" height="100%"/>
                </div>
              </td>
            </tr>

            <tr>
              <td className="imageBox2">
                <div className="homeImg2">
                  <img src="https://cdn.pixabay.com/photo/2016/07/06/15/29/math-1500720_1280.jpg" width="100%" height="100%"/>
                </div>
              </td>
              <td className="textBox2">
                <div className="homeText2">
                  <p className="textStyle1">Want to Test your Cultural Knowledge?</p>
                  <p className="textStyle2">Visit the <Link to="/tr" className="homeLink">Trivia Page</Link> to see how much you know about cultures around the world and maybe learn something new.</p>
                </div>
              </td>
            </tr>
          </table>
        </div>
    </>
  );
}
 
export default Home;