
import {useEffect, useState} from 'react';
import {AB_LIST} from './../my-config'; 
import axios from 'axios'

function AbList() {
  const [listData, setListData] = useState({});

  async function getList(){
    const response = await axios.get(AB_LIST)
    console.log(response);
    setListData(response);
  }

  useEffect(() => {
    console.log(2);
    getList();
  }, []);
  console.log(1);
  return (
      <pre>{ JSON.stringify(listData, null, 4) }</pre>
  );
}

export default AbList;
