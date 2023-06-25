import { ProductsNew } from './ProductsNew';
import { ProductsIndex } from './ProductsIndex';
import { useEffect , useState} from 'react';
import axios from 'axios';

export function Content() {
const [dataInfo, setData] = useState(null);
const [dataShow, setShow] = useState(null);

const url_id = 1

const axiosFetch = () => {
    axios.get('http://localhost:3000/people/all').then(response =>{
      setData(response.data);
      console.log('Clicking!')
    })
  }

  const axiosShow = () => {
    axios.get(`http://localhost:3000/people/`+ url_id).then(response =>{
      setShow(response.data);
      console.log('Clicking!')
      console.log(dataShow)
    })
  }
  return (
    <div class="container">
      <h1>Resume Builder</h1>
      <button class ="btn btn-primary">Download as PDF</button>
      <button onClick={axiosFetch}>Fetch Axios Request!</button>
      {/* Fetch ALL firstnames in database */}
      
      {/* Resume Layout and Design ---later make it dynamically fill in info from backend like buttons are doing! */}
      <div class = "res-background">
        <div class="header">
          <h1>John Doe</h1>
          <h2>Software Developer</h2>
        </div>
        
        <div class="contact">
          <h3>(111)-1111 1111</h3> 
          <h3>LinkedIN</h3>
          <h3>Github</h3>
        </div>

        <div class ="summary">
          <h2>Summary:</h2>
          <p>I like to build stuff so get me a nice cushiony job pweeze</p>
        </div>

        <div class ="skills">
          <h2>Skills:</h2>
          <ul>
          <li>Karate</li>
          <li>Ruby</li>
          <li>C++</li>
          <li>Python</li>
          </ul>
        </div>
        
        <div class ="projects">
          <h2>Projects:</h2>
          <h3>XXX site (url)</h3>
          <p>I like to build stuff so get me a nice cushiony job pweeze</p>
          <h3>Panda Score (url)</h3>
          <p>I like to build stuff so get me a nice cushiony job pweeze</p>
        </div>

        <div class ="education">
          <h2>Education:</h2>
            <div class="education-header">
              <h3>Degree</h3><p>Start</p><p>End</p>
            </div>
            <div class="education-header">
              <h3>University</h3><p>Start</p><p>End</p>
            </div>
            <ul>
              <li>Food</li>
              <li>GPA:2.5</li>
            </ul>
        </div>
        
        <div class ="experience">
          <h2>Experience:</h2>
          <p>I like to build stuff so get me a nice cushiony job pweeze</p>
        </div>
      </div>
      {dataInfo ? <div>{dataInfo.map((resData => ( <div key ={resData.id}><button onClick={axiosShow}>Fetch Axios Id :{resData.id} </button>
        <p>{resData.first_name}</p></div>)))}</div>  : <div><p>empty</p></div>}



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
