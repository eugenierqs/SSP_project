import React, {useState, useEffect} from 'react';
import Cars from "./Cars";

const  CarsContainer = () => {

  const [data, setData, list, setList] = useState([])
  const [refresh, setRefresh]= useState(false)

  const options = {
      method: 'GET',
      headers: {
          'Accept': 'application/json',
          'ContentType': 'text/plain'
      },
  };

  useEffect(() => {
    function getData() {
      fetch("http://localhost:3000/car", options)
      .then(res => {
        if(res.ok)
        return res.json()
      })
      .then((res) => {
        // console.log(res);
        setData(res);
        setRefresh(false);
      })
    }
    getData()

    if (refresh){
      getData()
    }

  }, [refresh]);


  return (
    <Cars setRefresh={setRefresh} data={data} />
  )

}

export default CarsContainer
