import React, { useEffect, useState } from 'react';


 function Appa () {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/places.json')
      .then((response) => response.json())
      .then((json) => {
        console.log(json)
        setData(json)})

      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
<div>
     {data.map(d=><div>{d.restaurantName}</div>).join( )}
      {data.map(d=>d.address).join( )}
  </div>
  );
};
export default Appa;
