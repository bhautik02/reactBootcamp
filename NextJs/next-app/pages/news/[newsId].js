import { useRouter } from "next/router";

const something = () => {
  const router = useRouter();
  return <h1>{router.query.newsId}</h1>;
};
export default something;
