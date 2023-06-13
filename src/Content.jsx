import { ProductsNew } from './ProductsNew';
import { ProductsIndex } from './ProductsIndex';
import { useEffect , useState} from 'react';
import axios from 'axios';

export function Content() {
const [dataInfo, setData] = useState(null);

const axiosFetch = () => {
    axios.get('http://localhost:3000/people/all').then(response =>{
      setData(response.data);
      console.log('Clicking!')
    })
    if (dataInfo) { 
      console.log("data loaded");
      console.log(dataInfo)
    }
  }

function headerText() {

}

function dataPro() {
  return <div>{dataInfo.map((resData => ( <p>{resData.first_name}</p>)))}</div>
}
  return (
    <div class="container">
      <h1>Resume Builder</h1>
      <button onClick={axiosFetch}>Fetch Axios Request!</button>
       <h1 id ="dataprint">Try</h1>
      <p><a href=''>Student #1 Resume</a></p>
      {dataInfo ? <h1>Logged in</h1> : <h1>Logged out</h1>}
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
