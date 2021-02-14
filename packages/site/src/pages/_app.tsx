import type { AppProps } from "next/app";
import Head from "next/head";
import Link from "next/link";
import { feedOptions } from "../rssFeed/options";
import "../styles/globals.css";
import styles from "../styles/App.module.css";
import headerStyles from "../styles/Header.module.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{feedOptions.title}</title>
        <meta name="author" content={feedOptions.description} />
        <meta name="description" content={feedOptions.author} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <header className={headerStyles.header}>
          <div className={headerStyles["header-inner"]}>
            <h1 className={headerStyles.title}>
              <Link href="/">{feedOptions.title}</Link>
              <span className={headerStyles.tagline}>
                {feedOptions.description}
              </span>
            </h1>
          </div>
        </header>
        <main className={styles.main}>
          <Component {...pageProps} />
        </main>

        <footer className={styles.footer}>
          <p>{feedOptions.copyright?.replace("&#xA9;", "©︎")}</p>
        </footer>
      </div>
    </>
  );
}

export default MyApp;
