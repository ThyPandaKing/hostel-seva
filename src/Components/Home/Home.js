import AboutSite from './AboutSite';

const Home = () => {
  return (
    <div>
      <h1
        className="text-dark display-3"
        style={{display: 'flex', justifyContent: 'center'}}
      >
        <ins>Features</ins>
      </h1>
      <AboutSite />
    </div>
  );
};

export default Home;
