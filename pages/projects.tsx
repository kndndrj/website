import { useState, useEffect } from 'react';
import Layout from "../components/layout";
import Head from "next/head";
import Tag from "../components/tag";
import utilStyles from "../styles/utils.module.css";
import A from "../components/a";

interface GHRepo {
  name: string,
  fork: boolean,
  archived: boolean,
  language: string,
  description: string,
}

export default function ProjectsPage() {
  const [data, setData] = useState<GHRepo[]>([]);
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

  let body = <p>No data</p>;
  if (isLoading) {
    body = <p>Loading...</p>;
  } else if (data) {
    body = <ul className={utilStyles.list}>
      {data.map((repo) =>
        <>
          {!(repo.fork || repo.archived) &&
            <li className={utilStyles.listItem} key={repo.name}>
              <A href={"/projects/" + repo.name}>{repo.name}</A>
              <Tag>{repo.language}</Tag>
              <br/>
              <Tag>{repo.description}</Tag>
            </li>
          }
        </>
      )}
    </ul>
  }

  return (
    <Layout>
      <Head>
        <title>Projekti</title>
      </Head>
      <section className={utilStyles.headingDescription}>
        {body}
      </section>
    </Layout>
  );
}
