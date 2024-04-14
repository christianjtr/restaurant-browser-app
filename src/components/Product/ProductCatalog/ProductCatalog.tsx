import React from 'react';
import { Catalog } from '@app-types';
import { ProductItem } from '../ProductItem';
import './ProductCatalog.css';

export interface ProductCatalogProps {
  catalog: Catalog[];
  className?: string;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = (props: ProductCatalogProps): React.ReactElement => {
  const { catalog, className = 'grid grid-cols-2 gap-5 my-7 sm:px-0 md:px-2' } = props;

  const products = catalog
    .map((item) => {
      return item.products.map((product) => ({
        ...product,
        catalog: item.name,
      }));
    })
    .flat();

  return (
    <div className={`product-list ${className}`} data-testid="product-list" data-cy="product-list">
      {products.map((product, index) => (
        <ProductItem data={product} key={`product_${index}_${product.name}`} />
      ))}
    </div>
  );
};
