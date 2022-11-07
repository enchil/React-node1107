
import {useEffect, useState} from 'react';
import {AB_LIST} from './../my-config'; 
import axios from 'axios'
import ListTable from '../components/ListTable';
import Pagination from '../components/Pagination';

function AbList() {
  const [listData, setListData] = useState({
    totalRows: 0,
    totalPages: 0,
    perPage: 0,
    page: 1,
    rows: []
  });

  async function getList(){
    const response = await axios.get(AB_LIST)
    console.log(response);
    setListData(response.data);
  }

  useEffect(() => {
    //console.log(2);
    getList();
  }, []);
  //console.log(1);
  return (
    <>
    <div className='container'>
    <div className='row'>
      <div className='col'>
        <Pagination page={listData.page} totalPages={listData.totalPages}/>
      </div>
    </div>
    <ListTable rows={listData.rows}/>
    </div>
    
    {/* <pre>{ JSON.stringify(listData, null, 4) }</pre> */}

    </>
      
  );
}

export default AbList;
