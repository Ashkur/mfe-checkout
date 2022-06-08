import { NextResponse } from 'next/server';

export function middleware(req) {

//   if (req.nextUrl.href.includes('/myprefix/_next/'))
//     return NextResponse.rewrite(
//       req.nextUrl.href.replace('/myprefix/_next/', '/_next/'),
//     );]
    let nextUrl = req.nextUrl

    const host = 'localhost:3004'

    // console.log({ 
    //     nextUrl: nextUrl, 
    //     href: `${process.env.NEXT_PUBLIC_ASSET_PREFIX}${nextUrl.href}`,
    //     pathname: nextUrl.pathname,
    //     host,
    //     url: {...req.nextUrl}
    // })

    console.log( `https://${process.env.NEXT_PUBLIC_ASSET_PREFIX}${nextUrl.href}`)

    if (
        // process.env.NODE_ENV === 'production' &&
        !nextUrl.pathname.includes('.') && // exclude all files in the public folder
        !nextUrl.pathname.startsWith('/api') && // exclude all API routes
        nextUrl.href.includes('www.nizen.com.br/_next/')
      ) {
        // nextUrl.href = `https://${process.env.NEXT_PUBLIC_ASSET_PREFIX}${nextUrl.href}`
        // console.log(nextUrl.href)
        // nextUrl.href = `http://${host}${nextUrl.href}`
        // nextUrl.host = 'localhost:3004'
        // nextUrl.hostname = 'localhost'
        // nextUrl.host = 'checkout.ninizen.com.br'
        // nextUrl.hostname = 'checkout.ninizen.com.br'
        
        return NextResponse.rewrite(req.nextUrl.href.replace('www.nizen.com.br/_next/', 'checkout.nizen.com.br/_next/'),)
      }
}