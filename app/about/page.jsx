export const revalidate = false;

export default function AboutPage() {
  console.log("About page built");

  return (
    <div>
      <h1>About Us</h1>
      <p>This page is statically generated.</p>
      <h2>Good</h2>
    </div>
  );
}
