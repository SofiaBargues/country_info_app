export default function Page({ params }: { params: { country: string } }) {
  return <div>My Post: {params.country}</div>;
}

