import { ProductsNew } from './ProductsNew';
import { ProductsIndex } from './ProductsIndex';
import { useEffect , useState} from 'react';
import axios from 'axios';
import jsPDF from 'jspdf';
import { useRef } from 'react';
import html2canvas from 'html2canvas';

export function Content() {
const [dataInfo, setData] = useState(null);
const [dataShow, setShow] = useState(null);

const url_id = 1
const pdfRef = useRef(null);

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
  function downloadResume(){
    const resumecontent = pdfRef.current;
    html2canvas(resumecontent).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF('p', 'pt','letter',true);
      pdf.setFont('PTSans',"italic","400");
      pdf.setFontSize(12); 
      pdf.addImage(imgData, "png", 0, 0);
      pdf.save("download.pdf");
    });
  }
  return (
    <div class="container">
      <h1>Resume Builder</h1>
      <button class ="btn btn-primary" onClick={downloadResume}>Download as PDF</button>
      <button onClick={axiosShow}>Fetch!</button>
      {/* Fetch ALL firstnames in database */}
      
      {/* Resume Layout and Design ---later make it dynamically fill in info from backend like buttons are doing! */}
      <div class = "res-background" ref ={pdfRef}>
        <div class="header">
        {dataShow ? <div><h1>{dataShow.first_name} {dataShow.last_name}</h1><h2>{dataShow.title}</h2></div>: <div><h1>John Doe</h1><h2>Software Developer</h2></div>}
        </div>
        
        <div class="contact">
        {dataShow ? <div><h3>{dataShow.phone}</h3><h3>{dataShow.linkedin}</h3><h3>{dataShow.github}</h3><h3>{dataShow.location}</h3></div>: <div><h3>(111)-1111 1111</h3><h3>LinkedIn</h3><h3>Github</h3><h3>Nowhere</h3></div>}
        </div>

        <div class ="row">
          <h2>Summary:</h2>
          {dataShow ? <div><p>{dataShow.summary}</p></div>: <div><p>I like to build stuff so get me a nice cushiony job pweeze</p></div>}
        </div>

        <div class ="skills">
          <h2>Skills:</h2>
          <ul>
          {/* Not working, need to associate skills name and person url in backend w/ belongs_to person table */}
          {dataShow ? <div><li>{dataShow.name}</li></div>: <div><li>Karate</li><li>Ruby</li><li>C++</li><li>Python</li></div>}
          </ul>
        </div>

        <div class ="row">
          <h2>Projects:</h2>
            <div class = "col">
              <a href=""><h3>YahoXX site</h3></a>
              <h4>Start - End</h4>
            </div>
          <h4>Rails,React,Javascript</h4>
            <p>I like to build stuff so get me a nice cushiony job pweeze</p>
            <div class = "col">
            <a href=""><h3>Panda Score</h3></a>
              <h4>Start - End</h4>
            </div>
          <h4>Rails,React,Javascript</h4>
            <p>Panda that eats snakes app</p>
        </div>

        <div class ="row">
          <h2>Education:</h2>
            <div class = "col">
              <h3>Degree</h3>
              <h4>Start - End</h4>
            </div>
          <h4>University</h4>
            <p>I moved pillows around for a living here and then I quit and flew into the sky</p>
            <ul>
              <li>Food</li>
              <li>GPA:2.5</li>
            </ul>
        </div>
        
        <div class ="row">
          <h2>Experience:</h2>
            <div class = "col">
              <h3>Job</h3>
              <h4>Start - End</h4>
            </div>
          <h4>Company</h4>
            <p>I moved pillows around for a living here and then I quit and flew into the sky</p>

            <div class = "col">
              <h3>Job 2</h3>
              <h4>Start - End</h4>
            </div>
          <h4>Company 2</h4>
            <p>I moved pillows around for a living here and then I quit and flew into the sky</p>
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
