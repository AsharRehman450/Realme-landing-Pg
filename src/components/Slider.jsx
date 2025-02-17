import './Slider.css';

const Slider = () => {
  return (
    <div>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/public/1728700235469216bd1dea87245869ce9ad5fa2566b8e.jpg.webp" className="d-block w-100" alt="img"/>
          </div>
          <div className="carousel-item">
            <img src="/public/1732502822846997d10f6e07b4df484c81b3f21b49b0e.jpg.webp" className="d-block w-100" alt="img"/>
          </div>
          <div className="carousel-item">
            <img src="/public/1729049579915e7f3d499d6754dd89a30480e54ed937d.jpg.webp" className="d-block w-100" alt="img"/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>
    </div>
  );
}

export default Slider;
