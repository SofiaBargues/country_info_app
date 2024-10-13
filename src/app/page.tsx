"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);

  const [countries, setCountries] = useState([
    { countryCode: "AD", name: "Andorra" },
    { countryCode: "AL", name: "Albania" },
  ]);

  useEffect(() => {
    const fetchCountries = async () => {
      setLoading(true);
      try {
        const response = await fetch("/api/v1/countries", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          console.log(response);
          const result = await response.json();
          setCountries(result);
        } else {
          const errorData = await response.json();
          console.log(errorData);
          throw new Error(errorData.message || "Error en la solicitud");
        }
      } catch (error) {
        alert(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);
  return (
    <div>
      {countries.map((x, i) => (
        <a href={"/" + x.countryCode + "-" + x.name} key={i}>
          <button className="border m-2 rounded-md grid ">{x.name}</button>
        </a>
      ))}
    </div>
  );
}
