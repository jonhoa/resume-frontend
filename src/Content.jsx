import { ProductsNew } from './ProductsNew';
import { ProductsIndex } from './ProductsIndex';

export function Content() {
  return (
    <div class="container">
      <h1>Resume Builder</h1>
      <ProductsNew />
      <ProductsIndex />
    </div>
  );
}
