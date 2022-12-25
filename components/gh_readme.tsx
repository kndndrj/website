import { useState, useEffect } from 'react';
import styles from "./gh_readme.module.css";

import { marked } from 'marked'
import * as DOMPurify from 'dompurify';

const rawGithubUrl = "https://raw.githubusercontent.com/kndndrj/"
const normalGithubUrl = "https://github.com/kndndrj/"

async function getReadmeHTML(name: string): Promise<string> {

  if (!name) {
    return ""
  }

  const res = await fetch(rawGithubUrl + name + '/master/README.md')

  if (res.status != 200) {
    return marked.parse("# Not here!")
  }

  let data = await res.text();

  // absoulute urls
  // ... md images
  let regex = /!\[(.*)\]\(((?!(https?:)).*)\)/gm;
  let subst = `![$1](` + rawGithubUrl + name + `/master/$2)`;
  data = data.replace(regex, subst);
  // ... md links
  regex = /\s\[(.*)\]\(((?!(https?:)).*)\)/gm;
  subst = `[$1](` + normalGithubUrl + name + `/tree/master/$2)`;
  data = data.replace(regex, subst);
  // ... html images
  regex = /src="((?!(https?:)).*)"/gm;
  subst = `src="` + rawGithubUrl + name + `/master/$1"`;
  data = data.replace(regex, subst);

  // convert md to html
  return DOMPurify.sanitize(marked.parse(data))
}


export default function GHReadme({ id }) {
  const [data, setData] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getReadmeHTML(id).then(
      (readme) => {
        setData(readme)
        setLoading(false);
      }
    )
  }, [id]);

  let body = <p>No data</p>;
  if (isLoading) {
    body = <p>Loading...</p>;
  } else if (data) {
    body = <div className={styles.markdown} dangerouslySetInnerHTML={{ __html: data }} />;
  }

  return (
    <section>
      {body}
    </section>
  );
}
