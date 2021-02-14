import { useRouter } from "next/router";
import { feedItems } from "../../rssFeed/options";
import styles from "../../styles/Home.module.css";

export default function Home() {
  const router = useRouter();
  const { itemGuid } = router.query;

  const item = feedItems.find((i) => i.guid === itemGuid);
  if (!item) return <div>Nor Found</div>;

  return (
    <>
      <h1 className={styles.title}>{item.title}</h1>
      <p className={styles.description}>{item.description}</p>
    </>
  );
}
