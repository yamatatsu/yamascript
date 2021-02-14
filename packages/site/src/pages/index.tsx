import Link from "next/link";
import { feedItems } from "../rssFeed/options";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.grid}>
        {feedItems
          .slice()
          .reverse()
          .map((item) => (
            <Link key={item.guid} href={`/episodes/${item.guid}`}>
              <div className={styles.card}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </Link>
          ))}
      </div>
    </>
  );
}
