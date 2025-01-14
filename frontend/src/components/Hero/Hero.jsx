import './Hero.css';

const Hero = ({ title, image }) => {
  return (
    <div
      className="hero-image"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="hero-overlay">
        <h1 className="hero-title">{title}</h1>
      </div>
    </div>
  );
};

export default Hero;
