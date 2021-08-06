// Custom hook implementation

import { useState, useEffect } from "react";
const Usefetchs = () => {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      fetch(
        "https://asos2.p.rapidapi.com/v2/auto-complete?q=bikini%20top&store=US&country=US&currency=USD&sizeSchema=US&lang=en-US",
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "asos2.p.rapidapi.com",
          },
        }
      )
        .then((response) => {
          console.log('res',response);
        })
        .catch((err) => {
          console.error('err',err);
        });
    }
    getData();
  }, []);

  return { pending, error, data };
};

export default Usefetchs;
