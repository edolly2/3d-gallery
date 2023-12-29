import Img from '../assets/generic-placeholder.png';
// import Script from '../script';

const Gallery = () => {
  return (
    <div className='body'>
      <div className='gallery'>
        <div className='gallery-container'>
          <img
            className='gallery-item gallery-item-1'
            dataindex='1'
            src={Img}
            alt='Img'
          />
          <img
            className='gallery-item gallery-item-2'
            dataindex='2'
            src={Img}
            alt='Img'
          />
          <img
            className='gallery-item gallery-item-3'
            dataindex='3'
            src={Img}
            alt='Img'
          />
          <img
            className='gallery-item gallery-item-4'
            dataindex='4'
            src={Img}
            alt='Img'
          />
          <img
            className='gallery-item gallery-item-5'
            dataindex='5'
            src={Img}
            alt='Img'
          />
        </div>
        <div className='gallery-controls'></div>
      </div>
      {/* <script src={Script}></script> */}
    </div>
  );
};

export default Gallery;
