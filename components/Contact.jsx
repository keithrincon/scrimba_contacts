export default function Contact({ img, name, phone, email }) {
  return (
    <article className='contact-card'>
      <img src={img} alt='Photo of Mr. Whiskerson' />
      <h3>{name}</h3>
      <div className='info-group'>
        <img src='../src/assets/phone.png' alt='phone icon' width='22px' />
        <p>{phone}</p>
      </div>
      <div className='info-group'>
        <img
          src='../src/assets/mail.png
        '
          alt='mail icon'
          width='22px'
        />
        <p>{email}</p>
      </div>
    </article>
  );
}
