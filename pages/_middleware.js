import { NextResponse } from 'next/server';

export function middleware(req) {
//   if (req.nextUrl.href.includes('/myprefix/_next/'))
//     return NextResponse.rewrite(
//       req.nextUrl.href.replace('/myprefix/_next/', '/_next/'),
//     );

    if(process.env.NODE_ENV === 'production' && req.nextUrl.href.includes('/_next/')) {
        return NextResponse.rewrite(
            req.nextUrl.href.replace('/_next/', `${process.env.NEXT_PUBLIC_ASSET_PREFIX}/_next/`),
          );
    }

    return null;
}