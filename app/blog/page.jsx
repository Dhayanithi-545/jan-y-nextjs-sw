export const revalidate = 60;

export default async function BlogPage() {
  console.log("Blog page regenerated if needed");

  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  const posts = await res.json();

  return (
    <div>
      <h1>Blog</h1>
      {posts.slice(0, 5).map(post => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  );
}
