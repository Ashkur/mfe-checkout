import { NextResponse } from 'next/server';

export function middleware(req) {
    req.headers.host = 'checkout.nizen.com.br';
    return NextResponse.next()
}