import Contact from './components/Contact';

export default function App() {
  return (
    <div className='contacts'>
      <Contact
        img='../src/assets/download.jpg'
        name='Mr. Whiskerson'
        phone='(212) 555-1234'
        email='mr.whiskaz@catnap.meow'
      />
      <Contact
        img='../src/assets/download-1.jpg'
        name='Fluffykins'
        phone='(212) 555-2345'
        email='fluff@me.com'
      />
      <Contact
        img='../src/assets/download-2.jpg'
        name='Felix'
        phone='(212) 555-4567'
        email='thecat@hotmail.com'
      />
      <Contact
        img='../src/assets/download-3.jpg'
        name='Pumpkin'
        phone='(0800) CAT KING'
        email='pumpkin@scrimba.com'
      />
    </div>
  );
}
