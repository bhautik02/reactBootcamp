import { Fragment } from "react";
import Link from "next/link";

const NewsPage = () => {
  return (
    <Fragment>
      <h1>News</h1>
      <ul>
        <li>
          <Link href="news/l1">l1</Link>
        </li>
        <li>
          <Link href="news/l2">l2</Link>
        </li>
        <li>
          <Link href="news/l3">l3</Link>
        </li>
      </ul>
    </Fragment>
  );
};
export default NewsPage;
