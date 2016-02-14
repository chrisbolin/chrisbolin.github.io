const titleToId = (title, options = {}) => (
  title ? (
    (options.hash ? '#' : '')
    + title.toLowerCase().split(' ').join('-')
    ) : '#'
);

const PiecesApp = ({children = []}) => (
  <div>
    <Header pieces={children}/>
    {children.map((piece, i, pieces) => (
      React.cloneElement(piece, {
        previousPiece: pieces[i-1],
        nextPiece: pieces[i+1],
        key: i,
      })
    ))}
  </div>
);

const Header = ({pieces}) => (
  <div className="header page-container">
    <div className="homepage">
      <a href="/">chris bolin</a>
    </div>
    <div className="page">
      <div className="title">
        <h1>Words</h1>
      </div>
      <div className="links">
        {pieces.map((piece, i) => <PieceLink piece={piece} key={i}/>)}
      </div>
      <hr/>
    </div>
  </div>
);

const PieceLink = ({piece}) => (
  <div className="link" key={piece.props.title}>
    <a href={titleToId(piece.props.title, {hash: true})}>
      {piece.props.title}
    </a>
  </div>
);

const Piece = ({title, year, children, nextPiece = {props: {}}, previousPiece = {props: {}}, type = 'prose'}) => (
  <div id={titleToId(title)} className="piece page-container">
    <div className={`page ${type}`}>
      <hr/>
      <h1>{title}</h1>
      <div className="year">{year}</div>
      <div className="body">{children}</div>
      <hr/>
    </div>
    <div className="nav-links">
      <NavLink piece={previousPiece} type={'previous'}/>
      <NavLink/>
      <NavLink piece={nextPiece} type={'next'}/>
    </div>
  </div>
);

const NavLink = ({piece, type}) => (
  <a href={piece ? titleToId(piece.props.title, {hash: true}) : '#'}
    className={`nav-link ${type || 'home'}`}
    title={type || 'home'}
    />
);

const App = () => (
  <PiecesApp>
    <Piece title="Habitant Morbi" year="2016">
<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
<p>Habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
    </Piece>

    <Piece title="Lorum Ipsum Dolor Sit Amet" year="2015" type="poem">
      <p>
        Line one something or another one something or another and then
      </p>
      <p>Then Two,</p>
      <p>Finally the last.</p>
      <br/>
      <p>Then Two,</p>
      <p>Finally the last.</p>
    </Piece>

    <Piece title="Pellentesque" year="2015" type="poem">
<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
<p>Vestibulum habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
    </Piece>

    <Piece title="Tortor-quam" year="2015" type="poem">
      <p>Seventeen.</p>
    </Piece>

    <Piece title="Julian eu Libero" year="2015" type="poem">
      <p>Line one something.</p>
    </Piece>

    <Piece title="Turpis Egestas" year="2015" type="poem">
      <p>Line one something.</p>
    </Piece>

    <Piece title="Et Eetus, Et Netus" year="2015" type="poem">
      <p>Line one something.</p>
    </Piece>

    <Piece title="Donec" year="2015" type="poem">
      <p>Line one something.</p>
    </Piece>

    <Piece title="Et Malesuada?" year="2015" type="poem">
      <p>Line one something.</p>
    </Piece>

  </PiecesApp>
);

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);
