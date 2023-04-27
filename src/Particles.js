import React from 'react';
import Particles from 'particles.js';


const style = {
  particles: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
};

class ParticlesComponent extends React.Component {
  componentDidMount() {
    this.particles = Particles.init({
      selector: '.particles',
      color: '#FFFFFF',
      connectParticles: true,
      responsive: [
        {
          breakpoint: 768,
          options: {
            connectParticles: false,
          },
        },
      ],
    });
  }

  componentWillUnmount() {
    this.particles.destroy();
  }

  render() {
    return <div className="particles" style={style.particles}></div>;
  }
}

export default ParticlesComponent;
