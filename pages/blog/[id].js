const { client } = require("@/libs/client");
import style from '@/styles/Home.module.scss'

export default function BlogId({ blog }) {
    return (
        <main className={style.main}>
            <h1 className={style.title}>{blog.title}</h1>
            <p className={style.publishedAt}>最終更新時間：{blog.publishedAt}</p>
            {
                blog.categories.map((category) => (
                    <div key={category.id} className={style.tag}>
                        {category.name}
                    </div>
                ))
            }
            <div
                dangerouslySetInnerHTML={{
                    __html: `${blog.body}`
                }} 
                className="{style.post}">
            </div>
        </main>
    );
}

export const getStaticPaths = async () => {
    const data = await client.get({ endpoint: "blog" });
    const paths = data.contents.map((content) => {
        return `/blog/${content.id}`
    });
    return { paths, fallback: false };
}

export const getStaticProps = async (context) => {
    // console.log(context);
    const id = context.params.id;
    const data = await client.get({ endpoint: "blog", contentId: id });
    return {
        props: {
            blog: data
        }
    }
}