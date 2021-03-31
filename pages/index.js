import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title> {siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}></section>
      <p>
        Hi✌️ I'm kohei kaneshima. I'm softawre enginer at Univ. of the Ryukyus.
      </p>
      <p>
        (This is a sample website - you'll be building a site like this on{" "}
        <a href="https://nextjs-org/learn">our Next.js tutorial</a>.)
      </p>
    </Layout>
  );
}
