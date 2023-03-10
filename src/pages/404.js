import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFoundPage = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <div className="not-found">
      <h1>Oops...</h1>
      <h2>This page does not exist</h2>
      <p>
        Back to <Link href="/">Home page</Link> in 3 seconds
      </p>
    </div>
  );
};

export default NotFoundPage;
