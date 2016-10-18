'use strict';

var fx = {
  limitUnit: function limitUnit(x) {
    return x < 0 ? 0 : x < 1 ? x : 1;
  },
  isMobile: function isMobile() {
    return navigator.userAgent.match(/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile/);
  },
  isSafari: function isSafari() {
    var ua = navigator.userAgent;
    return ua.match(/Safari/) && !ua.match(/CriOS|Chrome/);
  }
};

var ColorBar = React.createClass({
  displayName: 'ColorBar',
  render: function render() {
    var height = fx.limitUnit(this.props.x) * 100;
    return React.createElement('div', { style: {
        width: this.props.width,
        height: height + '%',
        backgroundColor: this.props.color,
        left: this.props.left,
        position: 'absolute',
        bottom: 0
      } });
  }
});

var CardFront = React.createClass({
  displayName: 'CardFront',
  render: function render() {
    var x = this.props.x;
    var zIndex = x < 0.5 ? 1 : 0;
    if (!zIndex) return null;
    var scrollStyle = {
      opacity: 1 - 10 * x
    };
    return React.createElement(
      'div',
      { className: 'card-face front', style: { zIndex: zIndex } },
      React.createElement(
        'div',
        { className: 'title' },
        'chris bolin',
        React.createElement('hr', null)
      ),
      React.createElement(
        'div',
        { className: 'scroll', style: scrollStyle },
        '(scroll)'
      ),
      React.createElement(ColorBar, { color: '#EDC919', left: '0%', width: '20%', x: x * 5.2 }),
      React.createElement(ColorBar, { color: '#76919A', left: '20%', width: '20%', x: x * 4.7 }),
      React.createElement(ColorBar, { color: '#257A97', left: '40%', width: '20%', x: x * 4.4 }),
      React.createElement(ColorBar, { color: '#7A486E', left: '60%', width: '20%', x: x * 4 }),
      React.createElement(ColorBar, { color: '#FD556F', left: '80%', width: '20%', x: x * 3.5 })
    );
  }
});

var CardBack = React.createClass({
  displayName: 'CardBack',
  render: function render() {
    var x = this.props.x;
    var zIndex = x > 0.5 ? 1 : 0;
    var style = {
      zIndex: zIndex,
      backgroundColor: 'black'
    };

    if (!zIndex) return null;
    return React.createElement(
      'div',
      { className: 'card-face back', style: style },
      React.createElement(ColorBar, { color: '#EDC919', width: '10%', left: '0%', x: 2 * (1 - x) }),
      React.createElement(ColorBar, { color: '#76919A', width: '10%', left: '10%', x: 2.1 * (1 - x) }),
      React.createElement(ColorBar, { color: '#257A97', width: '10%', left: '20%', x: 2.2 * (1 - x) }),
      React.createElement(ColorBar, { color: '#7A486E', width: '10%', left: '30%', x: 2.3 * (1 - x) }),
      React.createElement(ColorBar, { color: '#EDC919', width: '10%', left: '40%', x: 2.4 * (1 - x) }),
      React.createElement(ColorBar, { color: '#76919A', width: '10%', left: '50%', x: 2.5 * (1 - x) }),
      React.createElement(ColorBar, { color: '#257A97', width: '10%', left: '60%', x: 2.6 * (1 - x) }),
      React.createElement(ColorBar, { color: '#7A486E', width: '10%', left: '70%', x: 2.7 * (1 - x) }),
      React.createElement(ColorBar, { color: '#EDC919', width: '10%', left: '80%', x: 2.8 * (1 - x) }),
      React.createElement(ColorBar, { color: '#76919A', width: '10%', left: '90%', x: 2.9 * (1 - x) })
    );
  }
});

var CardPlane = React.createClass({
  displayName: 'CardPlane',
  getStyle: function getStyle() {
    var x = this.props.x;
    var rotateX = 180 * (x < 0.5 ? x : fx.limitUnit(x * 2 - 0.5));
    var transform = '\n      rotateZ(' + 90 * x + 'deg)\n      rotateX(' + rotateX + 'deg)\n      translate3d(' + -50 * x + 'px, 0, 0)\n      scale(' + (1 + x * x * x * x * 10) + ')\n    ';

    return {
      transform: transform,
      WebkitTransform: transform
    };
  },
  render: function render() {
    var zFront = this.props.x < 0.5 ? 1 : 0;
    var zBack = !zFront;
    return React.createElement(
      'div',
      { style: this.getStyle(), className: 'card-plane' },
      React.createElement(CardFront, { x: this.props.x }),
      React.createElement(CardBack, { x: this.props.x })
    );
  }
});

var Arrow = React.createClass({
  displayName: 'Arrow',
  render: function render() {
    var x = this.props.x;
    var grey = Math.floor(255 * (1 - x));
    var transform = 'translateY(' + 20 * x + 'px)';
    var style = {
      transform: transform,
      WebkitTransform: transform,
      color: 'rgb(' + grey + ',' + grey + ',' + grey + ')',
      opacity: 10 * (1 - x)
    };
    return React.createElement(
      'div',
      { className: 'arrow', style: style },
      '\u2193'
    );
  }
});

var Line = function Line(_ref) {
  var children = _ref.children;
  var x = _ref.x;
  var show = _ref.show;
  return React.createElement(
    'div',
    {
      style: {
        opacity: x > show ? (x - show) / (1 - show) : 0
      },
      className: 'line' },
    children
  );
};

var Slash = function Slash(props) {
  return React.createElement(
    'span',
    null,
    ' / '
  );
};

var A = function A(_ref2) {
  var children = _ref2.children;
  var href = _ref2.href;
  return React.createElement(
    'a',
    { href: href, target: '_blank' },
    children
  );
};

var BackText = function BackText(_ref3) {
  var x = _ref3.x;

  // Text does not show until x < 0.7
  var progress = x < 0.7 ? 0 : (x - 0.7) / 0.3;
  var display = progress ? 'inherit' : 'none';
  var shaddowOpacity = fx.limitUnit((progress - 0.5) * 2);
  var textShadow = '\n    rgba(0,0,0,' + shaddowOpacity + ') 0.5vmin 0 0,\n    rgba(0,0,0,' + shaddowOpacity + ') 0.5vmin 0.5vmin 0,\n    rgba(0,0,0,' + shaddowOpacity + ') 0.5vmin -0.5vmin 0,\n    rgba(0,0,0,' + shaddowOpacity + ') -0.5vmin 0 0,\n    rgba(0,0,0,' + shaddowOpacity + ') -0.5vmin 0.5vmin 0,\n    rgba(0,0,0,' + shaddowOpacity + ') -0.5vmin -0.5vmin 0\n  ';

  var style = {
    display: display,
    textShadow: textShadow
  };

  return React.createElement(
    'div',
    { id: 'links', style: style },
    React.createElement(
      Line,
      { x: x, show: 0.78 },
      'chris bolin'
    ),
    React.createElement(
      Line,
      { x: x, show: 0.81 },
      'wannabe polymath'
    ),
    React.createElement(
      Line,
      { x: x, show: 0.84 },
      'cambridge, ma, usa'
    ),
    React.createElement(
      Line,
      { x: x, show: 0.87 },
      React.createElement(
        A,
        { href: 'https://www.formidable.com' },
        'dayjob'
      ),
      React.createElement(Slash, null),
      React.createElement(
        A,
        { href: 'https://www.jumpshell.com' },
        'nightshift'
      )
    ),
    React.createElement(
      Line,
      { x: x, show: 0.90 },
      React.createElement(
        A,
        { href: '/skycoins' },
        'skycoins'
      ),
      React.createElement(Slash, null),
      React.createElement(
        A,
        { href: '/tessellate' },
        'tessellate'
      )
    ),
    React.createElement(
      Line,
      { x: x, show: 0.93 },
      React.createElement(
        A,
        { href: 'https://codepen.io/chrisbolin' },
        'codepen'
      ),
      React.createElement(Slash, null),
      React.createElement(
        A,
        { href: '/enchiridion' },
        'enchiridion'
      )
    ),
    React.createElement(
      Line,
      { x: x, show: 0.96 },
      React.createElement(
        A,
        { href: 'https://twitter.com/bolinchris' },
        'twitter'
      ),
      React.createElement(Slash, null),
      React.createElement(
        A,
        { href: 'https://www.instagram.com/bolinchris' },
        'instagram'
      )
    )
  );
};

var App = React.createClass({
  displayName: 'App',
  getInitialState: function getInitialState() {
    return { x: 0 };
  },

  appStyle: {
    // longer scroll for desktop users
    height: window.innerHeight * (fx.isMobile() ? 1.5 : 3)
  },
  handleScroll: function handleScroll(e) {
    var x = fx.limitUnit(window.scrollY / (this.appStyle.height - window.innerHeight));
    this.setState({ x: x });
    document.documentElement.style.backgroundColor = x < 0.5 ? "#f9f9f9" : "black";
  },
  handleLegacyScroll: function handleLegacyScroll(e) {
    var _this = this;

    // handling for non-iOS mobile devices, until they allow painting while scrolling
    // this creates a non-interactive animation instead :/

    var x = this.state.x;
    var interval = 10; // update in ms
    var totalTime = 1000; // ms

    e.preventDefault();

    // don't queue up anything in the middle of animation
    if (x !== 1 && x !== 0) return;

    // 'scroll' up when at the bottom
    var increment = interval / totalTime * (x === 1 ? -1 : 1);
    var intervalId = setInterval(function () {
      x = fx.limitUnit(x + increment);
      _this.setState({ x: x });
      if (x === 0 || x === 1) {
        clearInterval(intervalId);
      }
    }, interval);
  },

  componentDidMount: function componentDidMount() {
    this.container = document.getElementsByClassName('main');
    // backup for non-safari mobile browsers
    var handler = fx.isMobile() && !fx.isSafari() ? this.handleLegacyScroll : this.handleScroll;

    window.addEventListener('scroll', handler);
    window.addEventListener('resize', handler);
    window.addEventListener('touchmove', handler);
  },
  render: function render() {
    var x = this.state.x; // extra padding for slight scroll ups
    var planeX = fx.limitUnit(x);
    return React.createElement(
      'div',
      { className: 'app', style: this.appStyle },
      React.createElement(
        'div',
        { className: 'container' },
        React.createElement(CardPlane, { x: planeX }),
        React.createElement(Arrow, { x: x }),
        React.createElement(BackText, { x: x })
      )
    );
  }
});

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));

var greeting = '\n /88\n| 88\n| 8888888   /888888  /88   /88\n| 88__  88 /88__  88| 88  | 88\n| 88  \\ 88| 88888888| 88  | 88\n| 88  | 88| 88_____/| 88  | 88\n| 88  | 88|  8888888|  8888888\n|__/  |__/ \\_______/ \\____  88\n                    /88  | 88\n                   |  888888/\n                    \\______/\n';

console.log(greeting);
console.log('source:');
console.log('https://github.com/chrisbolin/chrisbolin.github.io');
console.log('email:');
console.log('bolin.chris@gmail.com');
