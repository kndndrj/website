import { useState, useEffect } from 'react';
import utilStyles from "../styles/utils.module.css";

import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeSanitize from 'rehype-sanitize';
import rehypeStringify from 'rehype-stringify';

const rawGithubUrl = "https://raw.githubusercontent.com/kndndrj/"
const normalGithubUrl = "https://github.com/kndndrj/"


export default function GHReadme({id}) {
  const [data, setData] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(rawGithubUrl + id + '/master/README.md')
      .then((res) => {
        if (res.status != 200) {
          return "# Not here!";
        }
        return res.text();
      })
      .then((data) => {

        // absoulute urls
        let regex = /!\[(.*)\]\(((?!(https?:)).*)\)/gm;
        let subst = `![$1](` + rawGithubUrl + id + `/master/$2)`;
        data = data.replace(regex, subst);
        regex = /\s\[(.*)\]\(((?!(https?:)).*)\)/gm;
        subst = `[$1](` + normalGithubUrl + id + `/tree/master/$2)`;
        data = data.replace(regex, subst);
        regex = /src="(.*)"/gm;
        // TODO:
        // subst = `src="` + rawGithubUrl + id + `/master/$1"`;
        // data = data.replace(regex, subst);

        // convert md to html
        unified()
          .use(remarkParse)
          .use(remarkRehype)
          .use(rehypeSanitize)
          .use(rehypeStringify)
          .process(data)
          .then((content) => {
            setData(content.toString());
            setLoading(false);
          });

      });
  }, [id]);

  let body = <p>No data</p>;
  if (isLoading) {
    body = <p>Loading...</p>;
  } else if (data) {
    body = <div className={utilStyles.markdownHtmlContents} dangerouslySetInnerHTML={{ __html: data }} />;
  }

  return (
    <section className={utilStyles.markdown}>
      {body}
    </section>
  );
}
