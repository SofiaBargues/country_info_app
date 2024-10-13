export async function GET() {
  const countryCode = "UA";
  const countryName = "ukraine";

  // Country info
  const dataBorder = await fetch(
    "https://date.nager.at/api/v3/CountryInfo/" + countryCode
  );
  const border = await dataBorder.json();
  console.log(border);

  // Population
  const dataPopulation = await fetch(
    "https://countriesnow.space/api/v0.1/countries/population/q?country=" +
      countryName
  );
  const population = await dataPopulation.json();
  console.log(population);

  // Flag
  const dataFlag = await fetch(
    "https://countriesnow.space/api/v0.1/countries/flag/images/q?iso2=" +
      countryCode
  );
  const flag = await dataFlag.json();
  console.log(flag);

  return Response.json({ border, population, flag });
}
