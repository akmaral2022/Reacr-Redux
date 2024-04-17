import Catalog from '../page/sign-in';
import SignIn from '../page/catalog';

export const routes = [
  { path: '/', element: <SignIn /> },
  { path: '/catalog', element: <Catalog /> }
];