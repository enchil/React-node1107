
import {useEffect, useState} from 'react';

function AjaxText() {
  const [listData, setListData] = useState({});

  async function getList(){
    const r = await fetch('http://localhost:3001/ab/api');
    const result = await r.json();
    setListData(result);
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

export default AjaxText;
