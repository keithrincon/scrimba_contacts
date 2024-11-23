import Contact from './components/Contact';
import Whiskerson from './src/assets/download.jpg';
import Fluffykins from './src/assets/download-1.jpg';
import Felix from './src/assets/download-2.jpg';
import Pumpkin from './src/assets/download-3.jpg';

export default function App() {
  return (
    <div className='contacts'>
      <Contact
        img={Whiskerson}
        name='Mr. Whiskerson'
        phone='(212) 555-1234'
        email='mr.whiskaz@catnap.meow'
      />
      <Contact
        img={Fluffykins}
        name='Fluffykins'
        phone='(212) 555-2345'
        email='fluff@me.com'
      />
      <Contact
        img={Felix}
        name='Felix'
        phone='(212) 555-4567'
        email='thecat@hotmail.com'
      />
      <Contact
        img={Pumpkin}
        name='Pumpkin'
        phone='(0800) CAT KING'
        email='pumpkin@scrimba.com'
      />
    </div>
  );
}
