import React from 'react'
import { Pagination } from 'antd';

const onChangePage = value =>{
    console.log('onChangePage: ', value);
    
}
    
const PaginationConfig = {
    defaultCurrent: 1,
    defaultPageSize: 2,
    total: 5,
    onChange: onChangePage,
    showTotal: total => `Total ${total} items `
}


// export const TestPagination = () => <Pagination {...PaginationConfig} />;
export const TestPagination = () =>{

    return(

        <div style={{ display: 'block', width: 700, padding: 30 }}>
      <h4>ReactJS Ant-Design Pagination Component</h4>
      <Pagination {...PaginationConfig} />
    </div>
        );
}

