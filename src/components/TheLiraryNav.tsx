import Link from 'next/link';

const TheLibraryNav = () => {
    return (
        <div>
            <Link href="/">Home</Link>
            <Link href="/Archive">Archive</Link>
            <Link href="/Library">Library</Link>
        </div>
    )
}

export {TheLibraryNav}