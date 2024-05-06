import MainPost from "@/components/blog/MainPost";
import SecondaryPosts from "@/components/blog/SecondaryPosts";

export const serializers = {
  types: {
    // Common block types
    block: ({ node, children }) => {
      switch (node.style) {
        case "h1":
          return (
            <h1 className="text-black-800 mb-4 text-3xl font-bold">
              {children}
            </h1>
          );
        case "h2":
          return (
            <h2 className="text-black-800 mb-3 text-2xl font-bold">
              {children}
            </h2>
          );
        case "h3":
          return (
            <h3 className="text-black-800 mb-2 text-xl font-bold">
              {children}
            </h3>
          );
        case "blockquote":
          return (
            <blockquote className="border-l-4 border-gray-400 pl-4 italic">
              {children}
            </blockquote>
          );

        default:
          return <p className="mb-4 text-gray-800">{children}</p>;
      }
    },

    image: ({ node }) => {
      return <img src={node.asset.url} className=" mb-4" alt={node.alt} />;
    },
    // Add serializers for other custom types as needed
  },
  marks: {
    // Common mark types
    link: ({ mark, children }) => (
      <a
        href={mark.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500"
      >
        {children}
      </a>
    ),
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    // Add serializers for other mark types as needed
  },
};

// async function getPosts() {
//   const data = await client.fetch(
//     `*[_type == "post"] {title, slug, body, publishedAt, mainImage {asset -> {_id, url}, alt,}, "name": author -> name, } | order(publishedAt asc)`
//   );

//   return data;
// }

async function Blog() {
  // const data = await getPosts();
  // console.log(data);
  const posts = [
    {
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      img: "/images/messi.jpg",
      alt: "Lorem ipsum dolor sit amet consectetur.",
      body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo tempora laudantium inventore corrupti nulla, a deleniti ipsam possimus quia fuga itaque quidem cum quaerat laboriosam fugit odit rerum id nihil esse molestias. Nihil ipsa laborum maxime incidunt odit nostrum eius! Officiis optio sit repellat recusandae accusantium nobis perspiciatis tenetur ea!",
    },
    {
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit1",
      img: "/images/messi.jpg",
      alt: "Lorem ipsum dolor sit amet consectetur.",
      body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo tempora laudantium inventore corrupti nulla, a deleniti ipsam possimus quia fuga itaque quidem cum quaerat laboriosam fugit odit rerum id nihil esse molestias. Nihil ipsa laborum maxime incidunt odit nostrum eius! Officiis optio sit repellat recusandae accusantium nobis perspiciatis tenetur ea!",
    },
    {
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit2",
      img: "/images/messi.jpg",
      alt: "Lorem ipsum dolor sit amet consectetur.",
      body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo tempora laudantium inventore corrupti nulla, a deleniti ipsam possimus quia fuga itaque quidem cum quaerat laboriosam fugit odit rerum id nihil esse molestias. Nihil ipsa laborum maxime incidunt odit nostrum eius! Officiis optio sit repellat recusandae accusantium nobis perspiciatis tenetur ea!",
    },
    {
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit4",
      img: "/images/messi.jpg",
      alt: "Lorem ipsum dolor sit amet consectetur.",
      body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo tempora laudantium inventore corrupti nulla, a deleniti ipsam possimus quia fuga itaque quidem cum quaerat laboriosam fugit odit rerum id nihil esse molestias. Nihil ipsa laborum maxime incidunt odit nostrum eius! Officiis optio sit repellat recusandae accusantium nobis perspiciatis tenetur ea!",
    },
    {
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit10",
      img: "/images/messi.jpg",
      alt: "Lorem ipsum dolor sit amet consectetur.",
      body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo tempora laudantium inventore corrupti nulla, a deleniti ipsam possimus quia fuga itaque quidem cum quaerat laboriosam fugit odit rerum id nihil esse molestias. Nihil ipsa laborum maxime incidunt odit nostrum eius! Officiis optio sit repellat recusandae accusantium nobis perspiciatis tenetur ea!",
    },
  ];

  return (
    <>
      <MainPost />
      {/* {data[0] && <MainPost />} */}

      {/* <SecondaryPosts posts={data.slice(1, 3)} /> */}
      <SecondaryPosts posts={posts.slice(1, 3)} />

      {/* <MainFooter /> */}
    </>
  );
}

export default Blog;
