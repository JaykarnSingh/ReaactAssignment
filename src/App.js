//import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {useState,useEffect} from 'react';
import BootstrapTable from 'react-bootstrap-table-next'
import paginationFactory from 'react-bootstrap-table2-paginator'
import cellEditFactory from 'react-bootstrap-table2-editor'
import filterFactory,{textFilter} from 'react-bootstrap-table2-filter';

function App() {
   const [data,setData]=useState([])
  useEffect(()=>{
    getData()
  },[])

  const getData=()=>{
    axios('https://jsonplaceholder.typicode.com/comments')
    .then((res)=>{
      setData(res.data)
      
    })
  }

  const emailFormatter=(data,row)=>{
    return<>
      Email={data}
    </>
  }

  const columns=[
  {
   dataField:'postId',
   text:'Product ID' ,
   sort:true,
   filter:textFilter()
  },
  {
  dataField:'email',
  text:"Email",
  sort:true,
  formatter:emailFormatter,
  filter:textFilter()
  },
  {
    dataField:'name',
    text:'Name' ,
    sort:true,
    filter:textFilter()
   }]

  return (
    <div className="App">
      <BootstrapTable
       keyField='id'
        data={data} 
        columns={columns}
         striped 
         hover
          condensed
         pagination={paginationFactory()}
         cellEdit={cellEditFactory({
          mode:"dbclick",
          blurToSave:true,
          // nonEditableRows:()=>[1,2,3]
         })}
         filter={filterFactory()}
          />
    </div>
  );
}

export default App;

