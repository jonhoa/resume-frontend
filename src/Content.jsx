import { ProductsNew } from './ProductsNew';
import { ProductsIndex } from './ProductsIndex';
import axios from 'axios';

export function Content() {
  function axiosFetch() {
    console.log('Clicking!');
    axios.get('http://localhost:3000/people/all').then(response =>{
      console.log(response.data);
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
      <ProductsNew />
      <ProductsIndex />
    </div>
  );
}
