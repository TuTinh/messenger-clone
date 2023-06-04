import { withAuth } from 'next-auth/middleware';

export default withAuth({ // will redirect us to the root path if we're not authenticated
    pages: {
        signIn: '/'
    }
});

export const config = {
    matchers: [
        'users/:path*', // all routes within /users/ will be protected
        'conversations/:path*'
    ]
};