import { useState, useEffect } from 'react';
import Layout from "../components/layout";
import Head from "next/head";
import utilStyles from "../styles/utils.module.css";
import A from "../components/a";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ProjectsPage() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://api.github.com/users/kndndrj/repos")
      .then((res) => {
        if (res.status != 200) {
          return [];
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  return (
    <Layout>
      <Head>
        <title>Projekti</title>
      </Head>
      <section className={utilStyles.headingDescription}>
        {isLoading && <p>Loading...</p>}

        {data &&
          <ul className={utilStyles.list}>
            {data.map((params) =>
              <>
                {params.fork ||
                  <li className={utilStyles.listItem} key={params.name}>
                    <A href={"/projects/" + params.name}><FontAwesomeIcon icon={["fas", "hammer"]} />{params.name}</A>
                  </li>
                }
              </>
            )}
          </ul>}
      </section>
    </Layout>
  );
}
