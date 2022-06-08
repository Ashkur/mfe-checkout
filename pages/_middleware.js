import { NextResponse } from 'next/server';

export function middleware(req) {

//   if (req.nextUrl.href.includes('/myprefix/_next/'))
//     return NextResponse.rewrite(
//       req.nextUrl.href.replace('/myprefix/_next/', '/_next/'),
//     );]
    let nextUrl = req.nextUrl

    console.log({ 
        nextUrl: nextUrl, 
        href: `${process.env.NEXT_PUBLIC_ASSET_PREFIX}${nextUrl.href}`,
        pathname: nextUrl.pathname,
    })

    if (
        // process.env.NODE_ENV === 'production' &&
        !nextUrl.pathname.includes('.') && // exclude all files in the public folder
        !nextUrl.pathname.startsWith('/api') // exclude all API routes
      ) {
        nextUrl.href = `${process.env.NEXT_PUBLIC_ASSET_PREFIX}${nextUrl.href}`
        return NextResponse.rewrite(nextUrl)
      }
}