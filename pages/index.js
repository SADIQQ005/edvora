import React from "react";

export async function getStaticProps() {
  const res = await fetch("https:assessment-edvora.herokuapp.com");
  const posts = await res.json();
  console.table(posts)

  return {
    props: {
      posts,
    },
  };
}

export default function Home(props) {
  return (
    <>
      {props.posts.map((post) => {
        return <h1>{post.product_name}</h1>;
      })}
    </>
  );
}
