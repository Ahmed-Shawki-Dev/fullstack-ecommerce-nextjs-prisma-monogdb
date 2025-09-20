import { getToken } from 'next-auth/jwt'
import { withAuth } from 'next-auth/middleware'
import { NextRequest, NextResponse } from 'next/server'

export default withAuth(
  async function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname
    const token = await getToken({ req: request })
    const isAuth = !!token

    const protectedRoutes = ['/dashboard']
    const isProtectedRoute = protectedRoutes.some((route) =>
      pathname.startsWith(route),
    )

    // لو مش مسجل دخول وحاول يدخل صفحة محمية
if (isProtectedRoute) {
  if (!token) {
    return NextResponse.redirect(new URL('/signin', request.url))
  }

  if (token.email !== process.env.ALLOWED_EMAIL) {
    return NextResponse.redirect(new URL('/', request.url))
  }
}

    

    // لو مسجل دخول وحاول يدخل صفحة الساين ان
    const publicAuthRoutes = ['/signin', '/register']
    const isPublicAuthRoute = publicAuthRoutes.some((route) =>
      pathname.startsWith(route),
    )
    if (isAuth && isPublicAuthRoute) {
      return NextResponse.redirect(new URL('/', request.url))
    }

    return NextResponse.next()
  },
  {
    callbacks: {
      async authorized() {
        return true
      },
    },
  },
)

export const config = {
  matcher: ['/dashboard/:path*', '/signin', '/register', '/'],
}
