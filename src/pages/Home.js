import React, { useContext } from "react";
// COMPONENTS
import { Banner, Shoptype } from "../components";
import GoogleApi from "../lib/GoogleApi";
// DATA
import { slides } from "../components/data/SliderData";
import MessengerCustomerChat from "react-messenger-customer-chat";
function Home() {
  return (
    <>
      <Banner slides={slides} />
      <Shoptype />

      {/* messenger intergration deploy to be work*/}
      <MessengerCustomerChat
        pageId="107578768193014"
        appId="370765604428490"
      />
      ,
    </>
  );
}

export default Home;
