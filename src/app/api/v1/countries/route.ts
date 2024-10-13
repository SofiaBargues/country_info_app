export async function GET() {
  const data = await fetch("https://date.nager.at/api/v3/AvailableCountries");
  const countries = await data.json();
  return Response.json(countries);
}
