export const revalidate = 5;

export default async function HomePage() {
  const res = await fetch(
    "http://www.randomnumberapi.com/api/v1.0/random?min=100&max=1000&count=1"
  );
  const json = await res.json();

  return (
    <div>
      <h1>{json[0]}</h1>
      <p>Random number: {Math.random() * 100}</p>
    </div>
  );
}
