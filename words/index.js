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
      'a',
      { className: 'homepage', href: '/' },
      'chris bolin'
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
      { className: 'nav-links {/*unused */}' },
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
      { title: 'Again', year: '2016' },
      React.createElement(
        'p',
        null,
        'From the dirt path she saw the distant highway; it filled the forest with a muffled amorphous roar, an organic buzz. But its sound did not match its sight. No, the small cars sped alone - red, silver, black, blue - each a discrete mass; only together did their tiny voices melt into the deep, even chorus.'
      ),
      React.createElement(
        'p',
        null,
        'She clutched the small stick in her hand, feeling its rough bark and smooth core before throwing it again down the path. The dog left her side and sprinted after it, his four paws a staccato cadence, fading. Soon he would return and drop the twig at her feet, wagging his tail with Sisyphean joy: again, again, again.'
      )
    ),
    React.createElement(
      Piece,
      { title: 'Winter Tomorrow', year: '2016', type: 'poem' },
      React.createElement(
        'p',
        null,
        'Melted snow on glistening streets under the bright yellow sun.'
      ),
      React.createElement(
        'p',
        null,
        'Tomorrow it may be winter again,'
      ),
      React.createElement(
        'p',
        null,
        'But today it is Spring.'
      )
    ),
    React.createElement(
      Piece,
      { title: 'How to Prepare Oatmeal', year: '2016' },
      React.createElement(
        'p',
        null,
        'The kitchen sink is an emotional and domestic bellwether: has yesterday been resolved? Can today begin unburdened? Or are there outstanding debts, pans caked with bits of a meal already forgotten?'
      ),
      React.createElement(
        'p',
        null,
        'This morning is unencumbered: the right basin (the shallower of the two) is empty; the left basin is filled with clean, orderly, dry dishes. (Our small apartment does not have a dishwasher.)'
      ),
      React.createElement(
        'p',
        null,
        'I remove a canister of oatmeal from the cupboard. Because it is cheap, convenient, and healthy, it is my de facto breakfast. The mediocre taste and texture quietly honor asceticism, a virtue I\'ve long associated with wisdom (a nod to my father’s Protestantism?).'
      ),
      React.createElement(
        'p',
        null,
        'There are two general techniques to prepare oatmeal that I know of:'
      ),
      React.createElement(
        'p',
        null,
        'A. Heat approximately 1 cup of water to boiling, then combine gradually with a serving of oatmeal, using only as much water as is necessary to achieve the desired consistency.'
      ),
      React.createElement(
        'p',
        null,
        'or'
      ),
      React.createElement(
        'p',
        null,
        'B. Combine approximately 1 cup of tap water with a serving of oatmeal, using only as much water as is necessary to achieve the desired consistency (importantly accounting for any water lost to subsequent heating), then heat the mixture.'
      ),
      React.createElement(
        'p',
        null,
        'I firmly support A, as I cannot fathom why anyone would take B’s risk of incorrectly estimating the oatmeal-water ratio before heating, leading to either an inedible dry brick (not enough water) or hot oat soup (too much water). My wife subscribes to B and we do not discuss the topic often.'
      ),
      React.createElement(
        'p',
        null,
        'I place the water into the microwave, an appliance that has been omnipresent in my lifetime, rising to prominence in the United States just before I was born. It is a strange device, bombarding water with radiation, literally spinning the tiny molecules to a boil.'
      ),
      React.createElement(
        'p',
        null,
        'To pass the time I move some of the dry, clean dishes from the sink to the shelves above. Both the sink and the small gas stove next to it are bone white and older than my parents. Along with the creaking wooden floors and cast iron radiators they transform the apartment into a makeshift live-in time capsule: this is World War II New England.'
      ),
      React.createElement(
        'p',
        null,
        'Despite its dated fixtures (also there are no three-prong electrical outlets [Fun fact: grounded three-prong outlets were required in the 1971 National Electrical Code, effective January 1, 1974 - forty-two years ago tomorrow.]) and small size, this apartment is the most expensive I\'ve rented. My rent has risen monotonically over my adulthood, sometimes in small inflationary steps, sometimes in large migratory leaps. If I now reversed those migrations, left the East Coast and returned to the Great Plains, my current rent check would surely secure a small mansion, full of shiny Frigidaire doors, silent floors, and approved electrical wiring.'
      ),
      React.createElement(
        'p',
        null,
        'After my breakfast is prepared, I walk down the short hallway (creak, creak) to the living room. On the coffee table, next to a bold red skein of yarn and a bold red crocheted scarf, is my wife’s wedding ring. I quickly note the simple connection - the ring must have been an impediment to her crocheting last night and had to be removed - but not before experiencing a slight preamble to panic, seeing this symbolic object in a symbolically threatening pose. I briefly but vividly imagine a bitter fight and a discarded ring before I fade back to reality.'
      ),
      React.createElement(
        'p',
        null,
        'I pick up the ring and inspect it. The small center diamond is flanked by two even smaller diamonds; all three are set in 14-karat white gold. I bought it when I was twenty-three years old, four months after graduating from college. Over the intervening years I have been both embarrassed of the diamonds’ small size (2011, Cambridge, Massachusetts: my best friend introduces us to his Harvard Business School classmates) and ashamed they were diamonds at all (2010, Austin, Texas: we watch Leonardo DiCaprio in Blood Diamond on DVD). Now I see that this tiny ring is a snapshot of another moment: that moment we were naïve and poor and got married too young by any reasonable measure. So often happiness is not reasonable.'
      )
    ),
    React.createElement(
      Piece,
      { title: 'Small Accomplishments', year: '2015' },
      React.createElement(
        'p',
        null,
        'It is the first frigid morning in many months and I’m prepared for my bicycle ride: I have gloves inside of my mittens, long underwear (my family always called them "long johns"), and second-hand ski goggles. I\'m self-conscious about the ski goggles, but they do prevent my eyes from watering in the cold, harsh wind. They also give a golden tint to the world that is subtle at first, its full effect not realized until I finish my journey and take off the goggles and everything loses that ephemeral warm glow.'
      ),
      React.createElement(
        'p',
        null,
        'On my ride I pass a block with small signs stuck into the grass next to the street. Each sign has three lines of text, simple black glyphs against a yellow background:'
      ),
      React.createElement(
        'p',
        null,
        'Please',
        React.createElement('br', null),
        'No Parking',
        React.createElement('br', null),
        'Funeral'
      ),
      React.createElement(
        'p',
        null,
        'Maybe today is a better day for a funeral than tomorrow: New Year\'s Day.'
      ),
      React.createElement(
        'p',
        null,
        'In the waiting room of my doctor\'s office (my first chore for the day) there are two water fountains, one slightly higher than the other. As with most water fountain pairs, only one is able to produce sufficient water pressure. A nurse calls me from the other end of the room. She is wearing what appear to be her pajamas (the sweatpants kind) and takes me to a small exam room. After wrapping my arm in a blood pressure cuff and forcing a thermometer into my ear, she asks my weight. Maybe her scale is broken; maybe she is simply lazy. I lie and tell her I am exactly three pounds heavier than I believe I am. She writes my lie along with the two other measurements on a brown paper towel she pulls from the wall dispenser and leaves the room.'
      ),
      React.createElement(
        'p',
        null,
        'As I wait for my doctor I look into a small mirror mounted on the wall. As a boy my mother would tease me for looking into mirrors too often. She would sing what I assumed was a song from her youth: "You\'re So Vain." The lyric "I\'ll bet you think this song is about you, don\'t you?" always bothered me. (Now I see that the line\'s simple contraction is a direct product of self-reference.)'
      ),
      React.createElement(
        'p',
        null,
        'In the mirror I try to decide how old my face looks. Assessing your own age is probably as hard as assessing your own beauty; both direct inward those finely tuned and fundamentally outward-looking perceptions. A fool\'s errand. Even so, I decide that my face looks young but not youthful.'
      ),
      React.createElement(
        'p',
        null,
        'I stare at my temples in the reflection and try to imagine the brain just between them. How profoundly I, like everyone else, am trapped in my own mind: all of these hopes and fears and deliberations exist only between those two temples.'
      ),
      React.createElement(
        'p',
        null,
        'My doctor knocks on the door and enters. She sees my bike helmet (I forgot to lock it to the bicycle) and we discuss the woes of winter cycling for two or three minutes - long enough to be friendly but short enough to attend to the business at hand. She is kind and quirky and more leery of medications than I am.'
      ),
      React.createElement(
        'p',
        null,
        'A few hours later I take a long shower at the gym and mentally write the first draft of this. I begin the process of remembering, which imperceptibly yet fundamentally changes the memories, unwittingly creating fiction from nonfiction: the past is subtly erased and replaced.'
      ),
      React.createElement(
        'p',
        null,
        'In the warm water I reflect on my own good mood and on how much simple joy I derive from tiny tasks finished. I picture a tombstone, its epitaph sardonic, truthful, self-conscious:'
      ),
      React.createElement(
        'p',
        null,
        'Christopher Eric Bolin',
        React.createElement('br', null),
        '1984 - TBD',
        React.createElement('br', null),
        'A Life of Small Accomplishments'
      ),
      React.createElement(
        'p',
        null,
        'After a long while I leave the shower\'s comfort and maneuver awkwardly around the other gym-goers to my locker. It is so difficult to remember that insofar as they are in my way I am in theirs. I come up with an idea for a bumper sticker:'
      ),
      React.createElement(
        'p',
        null,
        '"We Are Traffic."'
      ),
      React.createElement(
        'p',
        null,
        '(This was the third variation: "You\'re Traffic, Too" seemed to lack self-awareness and "We Are All Traffic" felt too patriotic.)'
      ),
      React.createElement(
        'p',
        null,
        'I go to a falafel shop for a late lunch and mentally write the second draft of this, leaving small notes and hummus smudges on my phone. I am alone but successfully enjoying my own company, which seems to me the only secret to happiness; there are many options to distract you from yourself, but they all fade in time.'
      ),
      React.createElement(
        'p',
        null,
        'After lunch I pass a bank and make a whim decision: I will get 20 dollars in quarters, because you can never have too many laundry quarters (another small accomplishment). Almost all of my brief interactions with bank tellers have been pleasant. Perhaps this is because tellers are better paid than most in customer service. Or maybe it\'s because at a bank everyone seems to be on their best behavior - quiet, dignified, adult. After the teller trades 80 quarters for my bill we exchange festive parting words.'
      ),
      React.createElement(
        'p',
        null,
        'The Bank Teller: "Happy New Year!"'
      ),
      React.createElement(
        'p',
        null,
        'Me: "Happy New Year\'s!"'
      ),
      React.createElement(
        'p',
        null,
        '(Is "Happy New Year\'s" excusable - ostensibly as a truncated "Happy New Year\'s Day" - or not?)'
      ),
      React.createElement(
        'p',
        null,
        'Later, on my trip home, the winter\'s bite is all but gone and I shed the heavy mittens. Snow melts and flows onto the glistening streets. The cyclist in front of me tries to ride no-handed and I\'m inspired: I\'ve learned and forgotten how to ride a bike without hands at least three separate times in my life. Maybe I’ll learn again. His arms are outstretched and carefree. His bike wobbles but stays upright.'
      )
    ),
    React.createElement(
      Piece,
      { title: 'Ageless', year: '2015', type: 'poem' },
      React.createElement(
        'p',
        null,
        'Full of life and lust'
      ),
      React.createElement(
        'p',
        null,
        'Ancient born again anew'
      ),
      React.createElement(
        'p',
        null,
        'The ageless Spring sun'
      )
    ),
    React.createElement(
      Piece,
      { title: 'The Winter Is Faltering', year: '2015', type: 'poem' },
      React.createElement(
        'p',
        null,
        'This cold morning seems somehow more industrial.'
      ),
      React.createElement(
        'p',
        null,
        'Heavy trucks hum and bounce on the beaten streets.'
      ),
      React.createElement(
        'p',
        null,
        'Steam pours from towers on the other side of the river.'
      ),
      React.createElement(
        'p',
        null,
        'Weak morning light makes its way through the crisp winter air.'
      ),
      React.createElement(
        'p',
        null,
        'The winter is faltering now, waning.'
      ),
      React.createElement('br', null),
      React.createElement(
        'p',
        null,
        'Of course there is the snow.'
      ),
      React.createElement(
        'p',
        null,
        'Of course it covers our little city.'
      ),
      React.createElement(
        'p',
        null,
        'But it, too, is faltering.'
      ),
      React.createElement(
        'p',
        null,
        'Spring rises, however slowly, however subtly.'
      ),
      React.createElement(
        'p',
        null,
        'And I rise, too.'
      )
    ),
    React.createElement(
      Piece,
      { title: 'Drive', year: '2014', type: 'poem' },
      React.createElement(
        'p',
        null,
        'Winter rising, tonight sinking.'
      ),
      React.createElement(
        'p',
        null,
        'Well-groomed childhood, adult melancholy.'
      ),
      React.createElement(
        'p',
        null,
        'Drive.'
      ),
      React.createElement('br', null),
      React.createElement(
        'p',
        null,
        'Fields rising, moon sinking.'
      ),
      React.createElement(
        'p',
        null,
        'Stern childhood, broken over the earth.'
      ),
      React.createElement(
        'p',
        null,
        'Drive.'
      ),
      React.createElement(
        'p',
        null,
        'Drive.'
      ),
      React.createElement('br', null),
      React.createElement(
        'p',
        null,
        'A cold song comes,'
      ),
      React.createElement(
        'p',
        null,
        'Open road in full view.'
      ),
      React.createElement(
        'p',
        null,
        'Drive.'
      )
    )
  );
};
if (typeof document !== 'undefined') {
  // BROWSER
  ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
} else {
  var React = require('react');
  var qsrv = require('qsrv');
  qsrv.render({
    reactElement: React.createElement(App, null),
    templatePath: 'index-template.html',
    elementId: 'app'
  });
}

