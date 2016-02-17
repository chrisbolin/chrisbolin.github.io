'use strict';

if (typeof document === 'undefined') {
  // server inputs and spoofing
  var React = require('react');
  var window = {};
  var navigator = { userAgent: '' };
}

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
    var colorH = 0.06;
    if (!zIndex) return null;
    return React.createElement(
      'div',
      { className: 'card-face back', style: { zIndex: zIndex } },
      React.createElement(ColorBar, { color: '#EDC919', width: '10%', left: '0%', x: 2.5 * (1 - x) + colorH }),
      React.createElement(ColorBar, { color: '#76919A', width: '10%', left: '10%', x: 9 * (1 - x) + colorH }),
      React.createElement(ColorBar, { color: '#257A97', width: '10%', left: '20%', x: 4 * (1 - x) + colorH }),
      React.createElement(ColorBar, { color: '#7A486E', width: '10%', left: '30%', x: 6 * (1 - x) + colorH }),
      React.createElement(ColorBar, { color: '#EDC919', width: '10%', left: '40%', x: 5 * (1 - x) + colorH }),
      React.createElement(ColorBar, { color: '#76919A', width: '10%', left: '50%', x: 2 * (1 - x) + colorH }),
      React.createElement(ColorBar, { color: '#257A97', width: '10%', left: '60%', x: 4 * (1 - x) + colorH }),
      React.createElement(ColorBar, { color: '#7A486E', width: '10%', left: '70%', x: 8 * (1 - x) + colorH }),
      React.createElement(ColorBar, { color: '#EDC919', width: '10%', left: '80%', x: 7 * (1 - x) + colorH }),
      React.createElement(ColorBar, { color: '#76919A', width: '10%', left: '90%', x: 3 * (1 - x) + colorH })
    );
  }
});

var CardPlane = React.createClass({
  displayName: 'CardPlane',
  getStyle: function getStyle() {
    var x = this.props.x;
    var transform = '\n      rotateZ(' + 90 * x + 'deg)\n      rotateX(' + 180 * x + 'deg)\n      translate3d(' + -50 * x + 'px, 0, 0)\n    ';

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

var Typer = React.createClass({
  displayName: 'Typer',
  render: function render() {
    var x = fx.limitUnit(this.props.x);
    if (!x) {
      return null;
    }
    var letters = this.props.children.reduce(function (agg, element) {
      if (element.length) {
        agg = agg.concat(element.split(''));
      } else {
        agg.push(element);
      }
      return agg;
    }, []);
    letters.push(' ');
    var cursor = x < 1 ? '|' : '';
    var childrenSubset = letters.slice(0, x * letters.length);
    return React.createElement(
      'span',
      null,
      childrenSubset,
      ' ',
      cursor,
      ' '
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
      '↓'
    );
  }
});

var BackText = React.createClass({
  displayName: 'BackText',
  render: function render() {
    return React.createElement(
      'div',
      { className: 'back-text' },
      React.createElement(
        Typer,
        { x: this.props.x },
        'chris bolin',
        React.createElement('br', null),
        'wannabe polymath',
        React.createElement('br', null),
        'cambridge, mass, usa',
        React.createElement('br', null),
        React.createElement('br', null),
        'bolin.chris@gmail.com',
        React.createElement('br', null),
        React.createElement('br', null),
        React.createElement(
          'a',
          { href: 'https://www.instagram.com/bolinchris/' },
          'photos'
        ),
        ' ',
        ' ',
        React.createElement(
          'a',
          { href: '/projects' },
          'projects'
        ),
        ' ',
        ' ',
        React.createElement(
          'a',
          { href: '/words' },
          'words'
        ),
        ' ',
        ' '
      )
    );
  }
});

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
    var x = this.state.x * 1.3; // extra padding for slight scroll ups
    var planeW = 0.9; // plane annimation weight (0-1)
    var planeX = fx.limitUnit(x / planeW);
    var typerX = fx.limitUnit(1 / (1 - planeW) * (-planeW + x));
    return React.createElement(
      'div',
      { className: 'app', style: this.appStyle },
      React.createElement(
        'div',
        { className: 'container' },
        React.createElement(CardPlane, { x: planeX }),
        React.createElement(Arrow, { x: x }),
        React.createElement(BackText, { x: typerX })
      )
    );
  }
});

if (typeof document !== 'undefined') {
  // BROWSER
  ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
} else {
  var qsrv = require('qsrv');
  qsrv.render({
    reactElement: React.createElement(App, null),
    templatePath: 'index-template.html',
    elementId: 'app'
  });
}

