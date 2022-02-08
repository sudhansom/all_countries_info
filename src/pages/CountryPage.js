import React from "react";
import Image from "../components/oneCountry/Image";
import Details from "../components/oneCountry/Details";

import useCountry from "../custom-hooks/useCountry";
function CountryPage() {
  //const param = useParams()
  //const {countryName} = useParams()

  const [err, country] = useCountry();
  console.log("App:~", err);

  return (
    <div className="country">
      <Image image={country} />
      <Details countryName={country} />
    </div>
  );
}

export default CountryPage;
