import Link from "next/link";
import { client } from "@/libs/client";

export default function Home({ blog }) {
  return (
    <div>
      <ul>
        {
          blog.map((blog) => (
            <li key={blog.id}>
              <h1><Link href={`/blog/${blog.id}`}>{blog.title}</Link></h1>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: 'blog', });
  return {
    props: {
      blog: data.contents,
    }
  }
}
