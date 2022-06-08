import { NextResponse } from 'next/server';

export function middleware(req) {
//   if (req.nextUrl.href.includes('/myprefix/_next/'))
//     return NextResponse.rewrite(
//       req.nextUrl.href.replace('/myprefix/_next/', '/_next/'),
//     );
    console.log(req.nextUrl)

    if(process.env.NODE_ENV === 'production') {
        req.nextUrl.href = `${process.env.NEXT_PUBLIC_ASSET_PREFIX}/${req.nextUrl.href}`
        return NextResponse.rewrite(req.nextUrl.host);
    }

    return null;
}