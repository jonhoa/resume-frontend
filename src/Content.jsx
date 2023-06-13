import { ProductsNew } from './ProductsNew';
import { ProductsIndex } from './ProductsIndex';
import { useEffect , useState} from 'react';
import axios from 'axios';

export function Content() {
const [dataInfo, setData] = useState(null);
const [dataShow, setShow] = useState(null);

const axiosFetch = () => {
    axios.get('http://localhost:3000/people/all').then(response =>{
      setData(response.data);
      console.log('Clicking!')
    })
  }

  const axiosShow = () => {
    axios.get(`http://localhost:3000/people/1`).then(response =>{
      setShow(response.data);
      console.log('Clicking!')
      console.log(dataShow)
    })
  }
  return (
    <div class="container">
      <h1>Resume Builder</h1>
      <button onClick={axiosFetch}>Fetch Axios Request!</button>
      {/* Fetch ALL firstnames in database */}
      {dataInfo ? <div>{dataInfo.map((resData => ( <p>{resData.first_name}</p>)))}</div>: <div><p>empty</p></div>}

      {/* Fetch show names in database */}
      <button onClick={axiosShow}>Fetch Axios Id : 1 </button>
      {dataShow ? <div><p>{dataShow.first_name}</p></div>: <div><p>empty</p></div>}
      {/* Next up, make the above button dynamic by ID and props ${id} */}
      <p><a href=''>Student #1 Resume</a></p>
      <p><a href=''>Student #2 Resume</a></p>
      <p><a href=''>Student #3 Resume</a></p>
      <p><a href=''>Student #4 Resume</a></p>
      <p><a href=''>Student #5 Resume</a></p>
      <p><a href=''>Student #6 Resume</a></p>
      <p><a href=''>Student #7 Resume</a></p>
      <p><a href=''>Student #8 Resume</a></p>

    
      <ProductsNew />
      <ProductsIndex />
    </div>
  );
}
