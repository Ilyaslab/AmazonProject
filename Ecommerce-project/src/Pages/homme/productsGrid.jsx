import { Product } from './Product';
export function ProductsGrid({products,getAppData}) {
  
  return (
    <div className="products-grid">
      {products.map((product) => (
        <Product key={product.id} product={product} getAppData={getAppData}/>
      ))}
    </div>
  );
}
