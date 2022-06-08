import { NextResponse } from 'next/server';

export function middleware(req) {

//   if (req.nextUrl.href.includes('/myprefix/_next/'))
//     return NextResponse.rewrite(
//       req.nextUrl.href.replace('/myprefix/_next/', '/_next/'),
//     );]
    let nextUrl = req.nextUrl

    let url = {...req.nextUrl}._url

    const host = url.host

    console.log({ 
        nextUrl: nextUrl, 
        href: `${process.env.NEXT_PUBLIC_ASSET_PREFIX}${nextUrl.href}`,
        pathname: nextUrl.pathname,
        url: url,
        host
    })

    if (
        process.env.NODE_ENV === 'production' &&
        !nextUrl.pathname.includes('.') && // exclude all files in the public folder
        !nextUrl.pathname.startsWith('/api') // exclude all API routes
      ) {
        nextUrl.href = `https://${process.env.NEXT_PUBLIC_ASSET_PREFIX}${nextUrl.href}`
        // nextUrl.href = `http://${host}${nextUrl.href}`
        
        return NextResponse.rewrite(nextUrl)
      }
}