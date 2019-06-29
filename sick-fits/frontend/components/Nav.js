import Link from 'next/link';

const Nav = () => (
  <div>
    <Link href='/sell'>
      <a>Sell!</a>
    </Link>
    <Link href='/'>
      Home!
    </Link>
  </div>
)

export default Nav;