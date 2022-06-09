import { NextResponse } from 'next/server';

export function middleware(req) {
    
    if(console.debug) console.debug(req)

    console.log('has /_next/ ', req.url.includes('/_next/'))

    // req.nextUrl.host = 'checkout.nizen.com.br'

    console.log(req.nextUrl)

    // if (
    //     process.env.NODE_ENV === 'production') {
    //     // nextUrl.href = `https://${process.env.NEXT_PUBLIC_ASSET_PREFIX}${nextUrl.href}`
    //     // console.log(nextUrl.href)
    //     // nextUrl.href = `http://${host}${nextUrl.href}`
    //     // nextUrl.host = 'localhost:3004'
    //     // nextUrl.hostname = 'localhost'
    //     // nextUrl.host = 'checkout.ninizen.com.br'
    //     // nextUrl.hostname = 'checkout.ninizen.com.br'
        
    //     return NextResponse.rewrite(req.nextUrl.href.replace('/slug/', '/slug/'))
    //   }
}