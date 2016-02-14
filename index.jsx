let fx = {
  limitUnit(x) {
    return (x < 0) ? 0 : (
      (x < 1) ? x : 1
    );
  },
  isMobile() {
    return navigator.userAgent.match(
      /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile/
    );
  },
  isSafari() {
    const ua = navigator.userAgent;
    return ua.match(/Safari/) && !ua.match(/CriOS|Chrome/);
  },
};

let ColorBar = React.createClass({
  render() {
    const height = fx.limitUnit(this.props.x) * 100;
    return (
      <div style={{
        width: this.props.width,
        height: height + '%',
        backgroundColor: this.props.color,
        left: this.props.left,
        position: 'absolute',
        bottom: 0,
      }}/>
    );
  }
});

let CardFront = React.createClass({
  render() {
    const x = this.props.x;
    const zIndex = (x < 0.5) ? 1 : 0;
    if (!zIndex) return null;
    const scrollStyle = {
      opacity: (1 - 10 * x),
    };
    return (
      <div className='card-face front' style={{zIndex}}>
        <div className='title'>
          chris bolin
          <hr/>
        </div>
        <div className="scroll" style={scrollStyle}>
          (scroll)
        </div>
        <ColorBar color="#EDC919" left="0%" width="20%" x={x*5.2}/>
        <ColorBar color="#76919A" left="20%" width="20%" x={x*4.7}/>
        <ColorBar color="#257A97" left="40%" width="20%" x={x*4.4}/>
        <ColorBar color="#7A486E" left="60%" width="20%" x={x*4}/>
        <ColorBar color="#FD556F" left="80%" width="20%" x={x*3.5}/>
      </div>
    );
  }
});

let CardBack = React.createClass({
  render() {
    const x = this.props.x;
    const zIndex = (x > 0.5) ? 1 : 0;
    const colorH = 0.06;
    if (!zIndex) return null;
    return (
      <div className='card-face back' style={{zIndex}}>
        <ColorBar color="#EDC919" width="10%" left="0%" x={2.5*(1-x) + colorH}/>
        <ColorBar color="#76919A" width="10%" left="10%" x={9*(1-x) + colorH}/>
        <ColorBar color="#257A97" width="10%" left="20%" x={4*(1-x) + colorH}/>
        <ColorBar color="#7A486E" width="10%" left="30%" x={6*(1-x) + colorH}/>
        <ColorBar color="#EDC919" width="10%" left="40%" x={5*(1-x) + colorH}/>
        <ColorBar color="#76919A" width="10%" left="50%" x={2*(1-x) + colorH}/>
        <ColorBar color="#257A97" width="10%" left="60%" x={4*(1-x) + colorH}/>
        <ColorBar color="#7A486E" width="10%" left="70%" x={8*(1-x) + colorH}/>
        <ColorBar color="#EDC919" width="10%" left="80%" x={7*(1-x) + colorH}/>
        <ColorBar color="#76919A" width="10%" left="90%" x={3*(1-x) + colorH}/>
      </div>
    );
  }
});

let CardPlane = React.createClass({
  getStyle() {
    const x = this.props.x;
    const transform = `
      rotateZ(${90 * x}deg)
      rotateX(${180 * x}deg)
      translate3d(${-50 * x}px, 0, 0)
    `;

    return {
      transform,
      WebkitTransform: transform,
    };
  },
  render() {
    let zFront = this.props.x < 0.5 ? 1 : 0;
    let zBack = !zFront;
    return (
      <div style={this.getStyle()} className='card-plane'>
        <CardFront x={this.props.x}/>
        <CardBack x={this.props.x}/>
      </div>
    )
  },
});

let Typer = React.createClass({
  render() {
    const x = fx.limitUnit(this.props.x);
    if (!x) {
      return null;
    }
    let letters = this.props.children.reduce((agg, element) => {
      if (element.length) {
        agg = agg.concat(element.split(''));
      } else {
        agg.push(element);
      }
      return agg;
    }, []);
    letters.push(' ');
    const cursor = (x < 1) ? '|' : '';
    const childrenSubset = letters.slice(0, x * letters.length);
    return <span>{childrenSubset} {cursor} </span>;
  }
});

let Arrow = React.createClass({
  render() {
    const x = this.props.x;
    const grey = Math.floor(255 * (1 - x));
    const transform = `translateY(${ 20 * x }px)`;
    const style = {
      transform,
      WebkitTransform: transform,
      color: `rgb(${grey},${grey},${grey})`,
      opacity: 10 * (1 - x),
    };
    return (
      <div className="arrow" style={style}>&darr;</div>
    );
  },
});

let BackText = React.createClass({
  render() {
    return (
      <div className="back-text">
        <Typer x={this.props.x}>
          chris bolin<br/>
          wannabe polymath<br/>
          cambridge, mass, usa<br/>
          <br/>
          bolin.chris@gmail.com
        </Typer>
      </div>
    );
  },
});

let App = React.createClass({
  getInitialState() {
    return {x: 0};
  },
  appStyle: {
    // longer scroll for desktop users
    height: window.innerHeight * (fx.isMobile() ? 1.5 : 3),
  },
  handleScroll(e) {
    const x = fx.limitUnit(window.scrollY / (
      this.appStyle.height
      - window.innerHeight
    ));
    this.setState({x});
  },

  handleLegacyScroll(e) {
    // handling for non-iOS mobile devices, until they allow painting while scrolling
    // this creates a non-interactive animation instead :/

    let x = this.state.x;
    const interval = 10; // update in ms
    const totalTime = 1000; // ms

    e.preventDefault();

    // don't queue up anything in the middle of animation
    if (x !== 1 && x !== 0) return;

    // 'scroll' up when at the bottom
    const increment = interval / totalTime * ((x === 1) ? -1 : 1);
    const intervalId = setInterval(() => {
      x = fx.limitUnit(x + increment);
      this.setState({x});
      if (x === 0 || x === 1) {
        clearInterval(intervalId);
      }
    }, interval);

  },
  componentDidMount: function () {
    this.container = document.getElementsByClassName('main');
    // backup for non-safari mobile browsers
    const handler = (fx.isMobile() && !fx.isSafari()) ?
      this.handleLegacyScroll : this.handleScroll;

    window.addEventListener('scroll', handler);
    window.addEventListener('resize', handler);
    window.addEventListener('touchmove', handler);
    window.addEventListener('touchstart', handler);
    window.addEventListener('click', handler);
  },
  render() {
    const x = (this.state.x) * 1.3; // extra padding for slight scroll ups
    const planeW = 0.9; // plane annimation weight (0-1)
    const planeX = fx.limitUnit(x/planeW);
    const typerX = fx.limitUnit(1/(1-planeW) * (-planeW + x));
    return (
      <div className='app' style={this.appStyle}>
        <div className='container'>
          <CardPlane x={planeX}/>
          <Arrow x={x}/>
          <BackText x={typerX}/>
        </div>
      </div>
    );
  },
});

React.render(
  <App/>,
  document.getElementById('app')
);
