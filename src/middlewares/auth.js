import { NextResponse } from 'next/server';

export function authMiddleware(req) {
  // Add your own logic here to check if the user is authenticated
  //const userIsAuthenticated = checkUserAuthentication();
  const userIsAuthenticated = false;
  if (!userIsAuthenticated) {
    return NextResponse.redirect('/login');
  }

  return NextResponse.next();
}