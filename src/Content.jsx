import { ProductsNew } from './ProductsNew';
import { ProductsIndex } from './ProductsIndex';

export function Content() {
  return (
    <div class="container">
      <h1>Resume Builder</h1>
      <p><a href=''>Student #1 Resume</a></p>
      <p><a href=''>Student #2 Resume</a></p>
      <p><a href=''>Student #3 Resume</a></p>
      <p><a href=''>Student #4 Resume</a></p>
      <p><a href=''>Student #5 Resume</a></p>
      <ProductsNew />
      <ProductsIndex />
    </div>
  );
}
