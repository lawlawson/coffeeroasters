import './Header.css';

const Header = () => {
  return (
    <div>
      <div>
        {/* <img src='/src/assets/home/desktop/icon-coffee-bean.svg' alt='' /> */}
        <div>coffeeroasters</div>
        <nav>
          <img src='' alt='' />
        </nav>
      </div>
      <div>
        <div className='bg-image'>
          <h1>Great coffee made simple.</h1>
          <p>
            Start your mornings with the world&apos;s best coffees. Try our
            expertly curated artisan coffees from our best roasters delivered
            directly to your door, at your schedule.
          </p>
          <button>Create your plan</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
