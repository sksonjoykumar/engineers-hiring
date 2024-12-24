import React from "react";
import Banner from "../../components/banner/Banner";
import FindSpecialty from "../../components/find-speciality/FindSpecialty";
import EngineersBooking from "../../components/engineers-booking/EngineersBooking";

function Home() {
  return (
    <div>
      <Banner />
      <FindSpecialty />
      <EngineersBooking />
    </div>
  );
}

export default Home;
