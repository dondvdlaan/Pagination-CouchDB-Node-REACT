import React from 'react';
import { AllCitiesWPagination } from './AllCitiesWPagination';
import {TablePagination} from './TablePagination';
import { Pagination } from 'antd';
import { TestPagination } from './TestPagination';



function App() {

const PaginationConfig = {
    defaultCurrent: 1,
    total: 5,
}


  return(
    <>
    <AllCitiesWPagination />
    {/* <TestPagination />; */}
      {/* <TablePagination /> */}
      {/* <Pagination {...PaginationConfig} />;  */}
    </>

  )
}

export default App;
