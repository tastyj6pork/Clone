import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import './App.css';

function MainCarousel() {

    return(<div>
    <Carousel class="mainCarousel">
  
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.hsd.co.kr/images/74a43c96b6f64a589ba10f6b0bf2492d20220831042000.jpg"
            alt="First slide"
          />
        </Carousel.Item>
  
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.hsd.co.kr/images/4767c069fb8a423292fb7aaf4c1e474120220831041921.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
  
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.hsd.co.kr/images/2162bc8e12d6483cb1b02a72477996a420220608063435.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
  
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.hsd.co.kr/images/6f572c72358d4d489686b15bf47692f720220729023244.jpg"
            alt="Fourth slide"
          />
        </Carousel.Item>
  
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.hsd.co.kr/images/6144674e33ff440baa29449a61c57f5820220831042116.jpg"
            alt="Fifth slide"
          />
        </Carousel.Item>
  
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.hsd.co.kr/images/5e82ed65ade14006a56c28871629128920220430112828.jpg"
            alt="Sixth slide"
          />
        </Carousel.Item>
  
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.hsd.co.kr/images/84da6dc781de4239a66df7c11b55677720220831042141.jpg"
            alt="Seventh slide"
          />
        </Carousel.Item>
  
      </Carousel>
    </div>)
  }

  export default MainCarousel;