// Custom hook implementation

import { useState, useEffect } from "react";
const Usefetch = (url) => {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);

  //   const getData = async () => {
  //     try {
  //       setPending(true);
  //       const response = await fetch(url);
  //       const json = await response.json();
  //       setData(json);
  //       setPending(false);
  //     } catch (error) {
  //       setError(true);
  //     }
  //   };

  useEffect(() => {
    async function getData() {
      try {
        setPending(true);
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
        setPending(false);
      } catch (error) {
        setError(true);
      }
    }
    
    getData();
  }, []);

  return { pending, error, data };
};

export default Usefetch;
