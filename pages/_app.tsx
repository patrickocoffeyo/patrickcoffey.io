import * as React from 'react';
import '../styles/global.css';

type Props<P> = {
  Component: React.FC<P>;
  pageProps: P;
};

export default function App<P>({ Component, pageProps }: Props<P>) {
  return <Component {...pageProps} />;
}
