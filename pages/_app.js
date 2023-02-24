import "@/styles/globals.css";

export default function App({ Component, pageProps, router }) {
  return (
    <>
      <Component key={router.pathname} {...pageProps} />
    </>
  );
}
