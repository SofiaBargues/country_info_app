"use client";
import { stringify } from "querystring";
import { useEffect, useState } from "react";
import { CountryResponse } from "../types";
// params.country = iso2-country
export default function Page({ params }: { params: { country: string } }) {
  const [loading, setLoading] = useState(true);
  const [country, setCountry] = useState<undefined | CountryResponse>(
    undefined
  );

  useEffect(() => {
    const fetchCountry = async () => {
      setLoading(true);
      try {
        const response = await fetch("/api/v1/country/" + params.country, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          console.log(response);
          const result = await response.json();
          setCountry(result);
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

    fetchCountry();
  }, []);

  if (country === undefined) {
    return <div>Loading...</div>;
  }

  console.log(country);
  return <div>Country info here{JSON.stringify(country)}</div>;
}
