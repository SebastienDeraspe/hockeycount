import Link from 'next/link';

export default function Footer({ children }) {
    return (
      <><div className='navigation'>
        <div className='titleapp' >HockeyCount</div>
        <div>
        <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="team">Team</Link></li>
            <li><Link href="/games">Games</Link></li>
            <li><Link href="About">About</Link></li>
            <li><Link href="Signup">Sign Up</Link></li>
        </ul>    
        </div>
        </div>
      </>
    )
  }