import React, { Component } from 'react';
import './App.css';
import Radium, { StyleRoot } from 'radium';
import SuperHero from './Person/SuperHero';

const superHeros = [
  {
    name: 'IronMan', franchise: 'Marvel', description: `Genius level intellect Proficient scientist and engineer Powered armor suit: Superhuman strength, speed, durability, agility, reflexes, and senses Supersonic flight Energy repulsor and missile projection Regenerative life support
  ` },
  { name: 'SuperMan', franchise: 'DC', description: `Superman's powers include incredible strength, the ability to fly. X-ray vision, super speed, invulnerability to most attacks, super hearing, and super breath. He is nearly unstoppable. However, Superman does have one weakness, Kryptonite.` },
  { name: 'BatMan', franchise: 'DC', description: `	Genius intellect Expert detective Skilled martial artist and hand-to-hand combatant Master tactician, strategist, and field commander Utilizing high-tech equipment` },
  { name: 'Black Widow', franchise: 'Marvel', description: `Expert spy, tactician, and hand-to-hand combatant Slowed aging, and enhanced immune system Expert marksman and mastery of various weapons Equipment via gauntlets: Grappling hook Knock out gas Taser Explosives Tear gas pellets Radio transmitter` },
  { name: 'Shang chi', franchise: 'Marvel', description: `He's known for his expertise in all forms of fighting and, thus, for his preference to eschew weapons for bare-handed battle. Despite this, Shang-Chi's ability with swords, staves, nunchaku, and shuriken is also unmatched.` },
  { name: 'Doc Strange', franchise: 'Marvel', description: `Mastery of magic Utilizes mystical artifacts, such as the Cloak of Levitation and the Eye of Agamotto Genius-level intellect Skilled martial artist Gifted physician and surgeon` },
  { name: 'Suger Girl', franchise: 'DC', description: `As the biological cousin of Superman, Power Girl exhibits all of the classic Kryptonian powers: super strength; flight; super speed; invulnerability; x-ray, telescopic, microscopic and heat vision; freeze breath; and super-hearing.` },
  { name: 'Arrow', franchise: 'DC', description: `Peak human physical and mental conditioning Master martial artist and hand-to-hand combatant Master archer and marksman Expert acrobat Utilizes high-tech equipment, armour, compound bow, and various types of specialty arrows` },
  { name: 'Flash', franchise: 'DC', description: `Flash's biggest strength is his speed. With speed his muscle strength also grows, simple physics. Faster the objects move, the harder is the impact/collision. Fact that he is one of the fastest characters on DC Earth(not the Universe/Multiverse) helps a lot.` },
  { name: 'Hulk', franchise: 'Marvel', description: `As Bruce Banner: Genius intellect As Hulk: Invulnerability Superhuman strength, speed, stamina, and durability Anger empowerment Regeneration` },
  { name: 'Captain America', franchise: 'Marvel', description: `KNOWN SUPERHUMAN POWERS: Captain America has agility, strength, speed, endurance, and reaction time superior to any Olympic athlete who ever competed. The Super-Soldier formula that he has metabolized has enhanced all of his bodily functions to the peak of human efficiency.` },
  { name: 'Aquaman', franchise: 'DC', description: `Although Aquaman's origin and even identity have been revised several times over the decades, in most iterations he possesses superhuman strength, the ability to breathe underwater, and the capacity to communicate telepathically with creatures of the sea, among other powers.` },
  { name: 'Cybork', franchise: 'DC', description: `Abilities. Large portions of Victor Stone's body have been replaced by advanced mechanical parts (hence the name Cyborg) granting him superhuman strength, speed, stamina, and flight. His mechanically-enhanced body, much of which is metallic, is far more durable than a normal human body.` },
  { name: 'Falcon', franchise: 'Marvel', description: `	Expert bird trainer Skilled hand-to-hand combatant, martial artist, aerialist, and acrobat Flight via wing harness Proficient tactician and strategist Empathic and telepathic link with all birds` },
  { name: 'Thor', franchise: 'Marvel', description: `Superhuman strength, speed, durability and longevity Abilities via Mjolnir: Inter-dimensional teleportation Electric manipulation Flight Weather manipulation` },
  {
    name: 'Shazam', franchise: 'DC', description: `
  The abilities he has as Shazam are: the wisdom of Solomon, the strength of Hercules, the stamina of Atlas, the power of Zeus, the courage of Achilles, and the speed of Mercury. Some figures in the DC universe consider him on par with being a demigod.`},
];

class App extends Component {

  state = {
    heroList: superHeros,
    showHeroList: false,
    showAdd: false,
  };

  deleteSuperHero = (indexPerson) => {
    let heros = this.state.heroList;
    heros.splice(indexPerson, 1);
    this.setState(this.heroList = heros);
  }




  showList = () => {
    let doesShow = this.state.showHeroList;
    let doesShowAdd = this.state.showAdd;

    this.setState({
      showHeroList: !doesShow,
      showAdd: !doesShowAdd
    });
  }


  render() {
    const style = {
      backgroundColor: 'blue',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightblue',
        color: 'black'
      }
    };


    if (this.state.showAdd) {
      this.addbutton = (
        <div>
          <input type='text' />
          <button className='button' >Add Hero</button>
        </div>
      )
    }



    {/* <h1>Second Approach To Show Toogle Code.</h1> */ }

    let superHeros = null;

    if (this.state.showHeroList && this.state.showAdd) {
      superHeros = (
        <div>
          {this.state.heroList.map((superhero, index) =>
            <SuperHero click={() =>
              this.deleteSuperHero(index)}
              key={superhero} name={superhero.name}
              franchise={superhero.franchise}>
              {superhero.description}
            </SuperHero>

          )}
        </div>
      );

      style.backgroundColor = 'violet';
      style[':hover'] = {
        backgroundColor: 'purple',
        color: 'black'
      };
    }

    const classes = [];
    if (this.state.heroList.length <= 2) {
      classes.push('red'); // classes = ['red']
    }
    if (this.state.heroList.length <= 1) {
      classes.push('bold'); // classes = ['red', 'bold']
    }

    return (
      <StyleRoot>
        <div className="App">
          <h1>Hi, We are in React App</h1>
          <p className={classes.join(' ')}>Click on below button to see Super Hero list !!</p>
          <button
            style={style}
            onClick={this.showList}>Toggle SuperHeros</button>
          {superHeros}
        </div>
      </StyleRoot>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default Radium(App);
