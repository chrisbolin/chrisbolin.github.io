'use strict';

var titleToId = function titleToId(title) {
  var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
  return title ? (options.hash ? '#' : '') + title.toLowerCase().split(' ').join('-') : '#';
};

var PiecesApp = function PiecesApp(_ref) {
  var _ref$children = _ref.children;
  var children = _ref$children === undefined ? [] : _ref$children;
  return React.createElement(
    'div',
    null,
    React.createElement(Header, { pieces: children }),
    children.map(function (piece, i, pieces) {
      return React.cloneElement(piece, {
        previousPiece: pieces[i - 1],
        nextPiece: pieces[i + 1],
        key: i
      });
    })
  );
};

var Header = function Header(_ref2) {
  var pieces = _ref2.pieces;
  return React.createElement(
    'div',
    { className: 'header page-container' },
    React.createElement(
      'div',
      { className: 'homepage' },
      React.createElement(
        'a',
        { href: '/' },
        'chris bolin'
      )
    ),
    React.createElement(
      'div',
      { className: 'page' },
      React.createElement(
        'div',
        { className: 'title' },
        React.createElement(
          'h1',
          null,
          'Words'
        )
      ),
      React.createElement(
        'div',
        { className: 'links' },
        pieces.map(function (piece, i) {
          return React.createElement(PieceLink, { piece: piece, key: i });
        })
      ),
      React.createElement('hr', null)
    )
  );
};

var PieceLink = function PieceLink(_ref3) {
  var piece = _ref3.piece;
  return React.createElement(
    'div',
    { className: 'link', key: piece.props.title },
    React.createElement(
      'a',
      { href: titleToId(piece.props.title, { hash: true }) },
      piece.props.title
    )
  );
};

var Piece = function Piece(_ref4) {
  var title = _ref4.title;
  var year = _ref4.year;
  var children = _ref4.children;
  var _ref4$nextPiece = _ref4.nextPiece;
  var nextPiece = _ref4$nextPiece === undefined ? { props: {} } : _ref4$nextPiece;
  var _ref4$previousPiece = _ref4.previousPiece;
  var previousPiece = _ref4$previousPiece === undefined ? { props: {} } : _ref4$previousPiece;
  var _ref4$type = _ref4.type;
  var type = _ref4$type === undefined ? 'prose' : _ref4$type;
  return React.createElement(
    'div',
    { id: titleToId(title), className: 'piece page-container' },
    React.createElement(
      'div',
      { className: 'page ' + type },
      React.createElement('hr', null),
      React.createElement(
        'h1',
        null,
        title
      ),
      React.createElement(
        'div',
        { className: 'year' },
        year
      ),
      React.createElement(
        'div',
        { className: 'body' },
        children
      ),
      React.createElement('hr', null)
    ),
    React.createElement(
      'div',
      { className: 'nav-links' },
      React.createElement(NavLink, { piece: previousPiece, type: 'previous' }),
      React.createElement(NavLink, null),
      React.createElement(NavLink, { piece: nextPiece, type: 'next' })
    )
  );
};

var NavLink = function NavLink(_ref5) {
  var piece = _ref5.piece;
  var type = _ref5.type;
  return React.createElement('a', { href: piece ? titleToId(piece.props.title, { hash: true }) : '#',
    className: 'nav-link ' + (type || 'home'),
    title: type || 'home'
  });
};

var App = function App() {
  return React.createElement(
    PiecesApp,
    null,
    React.createElement(
      Piece,
      { title: 'Habitant Morbi', year: '2016' },
      React.createElement(
        'p',
        null,
        'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.'
      ),
      React.createElement(
        'p',
        null,
        'Habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.'
      )
    ),
    React.createElement(
      Piece,
      { title: 'Lorum Ipsum Dolor Sit Amet', year: '2015', type: 'poem' },
      React.createElement(
        'p',
        null,
        'Line one something or another one something or another and then'
      ),
      React.createElement(
        'p',
        null,
        'Then Two,'
      ),
      React.createElement(
        'p',
        null,
        'Finally the last.'
      ),
      React.createElement('br', null),
      React.createElement(
        'p',
        null,
        'Then Two,'
      ),
      React.createElement(
        'p',
        null,
        'Finally the last.'
      )
    ),
    React.createElement(
      Piece,
      { title: 'Pellentesque', year: '2015', type: 'poem' },
      React.createElement(
        'p',
        null,
        'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.'
      ),
      React.createElement(
        'p',
        null,
        'Vestibulum habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.'
      )
    ),
    React.createElement(
      Piece,
      { title: 'Tortor-quam', year: '2015', type: 'poem' },
      React.createElement(
        'p',
        null,
        'Seventeen.'
      )
    ),
    React.createElement(
      Piece,
      { title: 'Julian eu Libero', year: '2015', type: 'poem' },
      React.createElement(
        'p',
        null,
        'Line one something.'
      )
    ),
    React.createElement(
      Piece,
      { title: 'Turpis Egestas', year: '2015', type: 'poem' },
      React.createElement(
        'p',
        null,
        'Line one something.'
      )
    ),
    React.createElement(
      Piece,
      { title: 'Et Eetus, Et Netus', year: '2015', type: 'poem' },
      React.createElement(
        'p',
        null,
        'Line one something.'
      )
    ),
    React.createElement(
      Piece,
      { title: 'Donec', year: '2015', type: 'poem' },
      React.createElement(
        'p',
        null,
        'Line one something.'
      )
    ),
    React.createElement(
      Piece,
      { title: 'Et Malesuada?', year: '2015', type: 'poem' },
      React.createElement(
        'p',
        null,
        'Line one something.'
      )
    )
  );
};

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));

