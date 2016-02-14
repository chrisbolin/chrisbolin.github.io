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
     <a className="homepage" href="/">
       chris bolin
    </a>
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
    <div className="nav-links {/*unused */}">
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
    <Piece title="Again" year="2016">
      <p>
        From the dirt path she saw the distant highway; it filled the forest with a muffled amorphous roar, an organic buzz. But its sound did not match its sight. No, the small cars sped alone - red, silver, black, blue - each a discrete mass; only together did their tiny voices melt into the deep, even chorus.
      </p>
      <p>
        She clutched the small stick in her hand, feeling its rough bark and smooth core before throwing it again down the path. The dog left her side and sprinted after it, his four paws a staccato cadence, fading. Soon he would return and drop the twig at her feet, wagging his tail with Sisyphean joy: again, again, again.
      </p>
    </Piece>

    <Piece title="Winter Tomorrow" year="2016" type="poem">
      <p>
        Melted snow on glistening streets under the bright yellow sun.
      </p>
      <p>
        Tomorrow it may be winter again,
      </p>
      <p>
        But today it is Spring.
      </p>
    </Piece>

    <Piece title="How to Prepare Oatmeal" year="2016">
      <p>
        The kitchen sink is an emotional and domestic bellwether: has yesterday been resolved? Can today begin unburdened? Or are there outstanding debts, pans caked with bits of a meal already forgotten?
      </p>
      <p>
        This morning is unencumbered: the right basin (the shallower of the two) is empty; the left basin is filled with clean, orderly, dry dishes. (Our small apartment does not have a dishwasher.)
      </p>
      <p>
        I remove a canister of oatmeal from the cupboard. Because it is cheap, convenient, and healthy, it is my de facto breakfast. The mediocre taste and texture quietly honor asceticism, a virtue I've long associated with wisdom (a nod to my father’s Protestantism?).
      </p>
      <p>
        There are two general techniques to prepare oatmeal that I know of:
      </p>
      <p>
        A. Heat approximately 1 cup of water to boiling, then combine gradually with a serving of oatmeal, using only as much water as is necessary to achieve the desired consistency.
      </p>
      <p>
        or
      </p>
      <p>
        B. Combine approximately 1 cup of tap water with a serving of oatmeal, using only as much water as is necessary to achieve the desired consistency (importantly accounting for any water lost to subsequent heating), then heat the mixture.
      </p>
      <p>
        I firmly support A, as I cannot fathom why anyone would take B’s risk of incorrectly estimating the oatmeal-water ratio before heating, leading to either an inedible dry brick (not enough water) or hot oat soup (too much water). My wife subscribes to B and we do not discuss the topic often.
      </p>
      <p>
        I place the water into the microwave, an appliance that has been omnipresent in my lifetime, rising to prominence in the United States just before I was born. It is a strange device, bombarding water with radiation, literally spinning the tiny molecules to a boil.
      </p>
      <p>
        To pass the time I move some of the dry, clean dishes from the sink to the shelves above. Both the sink and the small gas stove next to it are bone white and older than my parents. Along with the creaking wooden floors and cast iron radiators they transform the apartment into a makeshift live-in time capsule: this is World War II New England.
      </p>
      <p>
        Despite its dated fixtures (also there are no three-prong electrical outlets [Fun fact: grounded three-prong outlets were required in the 1971 National Electrical Code, effective January 1, 1974 - forty-two years ago tomorrow.]) and small size, this apartment is the most expensive I've rented. My rent has risen monotonically over my adulthood, sometimes in small inflationary steps, sometimes in large migratory leaps. If I now reversed those migrations, left the East Coast and returned to the Great Plains, my current rent check would surely secure a small mansion, full of shiny Frigidaire doors, silent floors, and approved electrical wiring.
      </p>
      <p>
        After my breakfast is prepared, I walk down the short hallway (creak, creak) to the living room. On the coffee table, next to a bold red skein of yarn and a bold red crocheted scarf, is my wife’s wedding ring. I quickly note the simple connection - the ring must have been an impediment to her crocheting last night and had to be removed - but not before experiencing a slight preamble to panic, seeing this symbolic object in a symbolically threatening pose. I briefly but vividly imagine a bitter fight and a discarded ring before I fade back to reality.
      </p>
      <p>
        I pick up the ring and inspect it. The small center diamond is flanked by two even smaller diamonds; all three are set in 14-karat white gold. I bought it when I was twenty-three years old, four months after graduating from college. Over the intervening years I have been both embarrassed of the diamonds’ small size (2011, Cambridge, Massachusetts: my best friend introduces us to his Harvard Business School classmates) and ashamed they were diamonds at all (2010, Austin, Texas: we watch Leonardo DiCaprio in Blood Diamond on DVD). Now I see that this tiny ring is a snapshot of another moment: that moment we were naïve and poor and got married too young by any reasonable measure. So often happiness is not reasonable.
      </p>
    </Piece>

    <Piece title="Small Accomplishments" year="2015">
      <p>
        It is the first frigid morning in many months and I’m prepared for my bicycle ride: I have gloves inside of my mittens, long underwear (my family always called them "long johns"), and second-hand ski goggles. I'm self-conscious about the ski goggles, but they do prevent my eyes from watering in the cold, harsh wind. They also give a golden tint to the world that is subtle at first, its full effect not realized until I finish my journey and take off the goggles and everything loses that ephemeral warm glow.
      </p>
      <p>
        On my ride I pass a block with small signs stuck into the grass next to the street. Each sign has three lines of text, simple black glyphs against a yellow background:
      </p>
      <p>
        Please
        <br/>
        No Parking
        <br/>
        Funeral
      </p>
      <p>
        Maybe today is a better day for a funeral than tomorrow: New Year's Day.
      </p>
      <p>
        In the waiting room of my doctor's office (my first chore for the day) there are two water fountains, one slightly higher than the other. As with most water fountain pairs, only one is able to produce sufficient water pressure. A nurse calls me from the other end of the room. She is wearing what appear to be her pajamas (the sweatpants kind) and takes me to a small exam room. After wrapping my arm in a blood pressure cuff and forcing a thermometer into my ear, she asks my weight. Maybe her scale is broken; maybe she is simply lazy. I lie and tell her I am exactly three pounds heavier than I believe I am. She writes my lie along with the two other measurements on a brown paper towel she pulls from the wall dispenser and leaves the room.
      </p>
      <p>
        As I wait for my doctor I look into a small mirror mounted on the wall. As a boy my mother would tease me for looking into mirrors too often. She would sing what I assumed was a song from her youth: "You're So Vain." The lyric "I'll bet you think this song is about you, don't you?" always bothered me. (Now I see that the line's simple contraction is a direct product of self-reference.)
      </p>
      <p>
        In the mirror I try to decide how old my face looks. Assessing your own age is probably as hard as assessing your own beauty; both direct inward those finely tuned and fundamentally outward-looking perceptions. A fool's errand. Even so, I decide that my face looks young but not youthful.
      </p>
      <p>
        I stare at my temples in the reflection and try to imagine the brain just between them. How profoundly I, like everyone else, am trapped in my own mind: all of these hopes and fears and deliberations exist only between those two temples.
      </p>
      <p>
        My doctor knocks on the door and enters. She sees my bike helmet (I forgot to lock it to the bicycle) and we discuss the woes of winter cycling for two or three minutes - long enough to be friendly but short enough to attend to the business at hand. She is kind and quirky and more leery of medications than I am.
      </p>
      <p>
        A few hours later I take a long shower at the gym and mentally write the first draft of this. I begin the process of remembering, which imperceptibly yet fundamentally changes the memories, unwittingly creating fiction from nonfiction: the past is subtly erased and replaced.
      </p>
      <p>
        In the warm water I reflect on my own good mood and on how much simple joy I derive from tiny tasks finished. I picture a tombstone, its epitaph sardonic, truthful, self-conscious:
      </p>
      <p>
        Christopher Eric Bolin
        <br/>
        1984 - TBD
        <br/>
        A Life of Small Accomplishments
      </p>
      <p>
        After a long while I leave the shower's comfort and maneuver awkwardly around the other gym-goers to my locker. It is so difficult to remember that insofar as they are in my way I am in theirs. I come up with an idea for a bumper sticker:
      </p>
      <p>
        "We Are Traffic."
      </p>
      <p>
        (This was the third variation: "You're Traffic, Too" seemed to lack self-awareness and "We Are All Traffic" felt too patriotic.)
      </p>
      <p>
        I go to a falafel shop for a late lunch and mentally write the second draft of this, leaving small notes and hummus smudges on my phone. I am alone but successfully enjoying my own company, which seems to me the only secret to happiness; there are many options to distract you from yourself, but they all fade in time.
      </p>
      <p>
        After lunch I pass a bank and make a whim decision: I will get 20 dollars in quarters, because you can never have too many laundry quarters (another small accomplishment). Almost all of my brief interactions with bank tellers have been pleasant. Perhaps this is because tellers are better paid than most in customer service. Or maybe it's because at a bank everyone seems to be on their best behavior - quiet, dignified, adult. After the teller trades 80 quarters for my bill we exchange festive parting words.
      </p>
      <p>
        The Bank Teller: "Happy New Year!"
      </p>
      <p>
        Me: "Happy New Year's!"
      </p>
      <p>
        (Is "Happy New Year's" excusable - ostensibly as a truncated "Happy New Year's Day" - or not?)
      </p>
      <p>
        Later, on my trip home, the winter's bite is all but gone and I shed the heavy mittens. Snow melts and flows onto the glistening streets. The cyclist in front of me tries to ride no-handed and I'm inspired: I've learned and forgotten how to ride a bike without hands at least three separate times in my life. Maybe I’ll learn again. His arms are outstretched and carefree. His bike wobbles but stays upright.
      </p>
    </Piece>

    <Piece title="Ageless" year="2015" type="poem">
      <p>Full of life and lust</p>
      <p>Ancient born again anew</p>
      <p>The ageless Spring sun</p>
    </Piece>

    <Piece title="The Winter Is Faltering" year="2015" type="poem">
      <p>This cold morning seems somehow more industrial.</p>
      <p>Heavy trucks hum and bounce on the beaten streets.</p>
      <p>Steam pours from towers on the other side of the river.</p>
      <p>Weak morning light makes its way through the crisp winter air.</p>
      <p>The winter is faltering now, waning.</p>
      <br/>
      <p>Of course there is the snow.</p>
      <p>Of course it covers our little city.</p>
      <p>But it, too, is faltering.</p>
      <p>Spring rises, however slowly, however subtly.</p>
      <p>And I rise, too.</p>
    </Piece>

    <Piece title="Drive" year="2014" type="poem">
      <p>Winter rising, tonight sinking.</p>
      <p>Well-groomed childhood, adult melancholy.</p>
      <p>Drive.</p>
      <br/>
      <p>Fields rising, moon sinking.</p>
      <p>Stern childhood, broken over the earth.</p>
      <p>Drive.</p>
      <p>Drive.</p>
      <br/>
      <p>A cold song comes,</p>
      <p>Open road in full view.</p>
      <p>Drive.</p>
    </Piece>

  </PiecesApp>
);
if (typeof document !== 'undefined') {
  // BROWSER
  ReactDOM.render(
    <App/>,
    document.getElementById('app')
  );
} else {
  var React = require('react');
  var qsrv = require('qsrv');
  qsrv.render({
    reactElement: <App/>,
    templatePath: 'index-template.html',
    elementId: 'app',
  });
}
