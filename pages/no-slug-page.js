import Link from 'next/link';

export default function NoSlugPage () {
    return (
        <div>
            <h1>This is da page without slug</h1>
            <p>
            <Link href="https://www.nizen.com.br">
                    <a>Home</a>
                </Link>
            </p>
            <p>
                <Link href="/">
                    <a>Checkout index</a>
                </Link>
            </p>
            <p>
                <Link href="/slug/my-awsome-slug">
                    <a>Checkout with slug</a>
                </Link>
            </p>
        </div>
    )
}