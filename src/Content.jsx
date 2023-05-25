import { ProductsNew } from './ProductsNew';
import { ProductsIndex } from './ProductsIndex';
import axios from 'axios';

export function Content() {
  let resumeData = [];
  const fakeData = [
    { name: "Paulo", age: "26"}, {name: "Igor", age: "55"}
  ];
  
  function axiosFetch() {
    axios.get('http://localhost:3000/people/all').then(response =>{
      console.log(response.data);
      resumeData = response.data;
      console.log(resumeData);
      console.log('Clicking!')
    })
  }
  return (
    <div class="container">
      <h1>Resume Builder</h1>
      <button onClick= {axiosFetch}>Fetch Axios Request!</button>
      <p><a href=''>Student #1 Resume</a></p>
      <p><a href=''>Student #2 Resume</a></p>
      <p><a href=''>Student #3 Resume</a></p>
      <p><a href=''>Student #4 Resume</a></p>
      <p><a href=''>Student #5 Resume</a></p>
      <p><a href=''>Student #6 Resume</a></p>
      <p><a href=''>Student #7 Resume</a></p>
      <p><a href=''>Student #8 Resume</a></p>
      {fakeData.map((resData => (
        <div>
        <p>{resData.name}</p>
        </div>
      )))}
      <ProductsNew />
      <ProductsIndex />
    </div>
  );
}
