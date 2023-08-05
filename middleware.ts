export { default } from "next-auth/middleware"

export const config = {
    matcher: [
        '/users/:path*'  // all routes within /users/ will be protected
    ],
};