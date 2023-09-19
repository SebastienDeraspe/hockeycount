import Link from 'next/link';

export default function Footer({ children }) {
    return (
      <><div>
            <div><a href="mailto:info@hockeycount.com">info@hockeycount.com</a></div>
            <div><a href="tel:5146868351">514.686.8351</a></div>
            <div><Link href="/">Home</Link></div>
            <div><Link href="About">About</Link></div>
        </div>
      </>
    )
  }