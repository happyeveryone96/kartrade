import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import localFont from 'next/font/local';

const neuehaasunica = localFont({
  src: [
    {
      path: '../public/fonts/NeueHaasUnica-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/NeueHaasUnica-Medium.eot',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/NeueHaasUnica-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/NeueHaasUnica-Medium.woff',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/NeueHaasUnica-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/NeueHaasUnica-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={neuehaasunica.className}>
      <Component {...pageProps} />
    </main>
  );
}
