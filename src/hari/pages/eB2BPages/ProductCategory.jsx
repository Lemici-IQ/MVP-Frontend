import React from 'react';
import Header from '../../components/eB2BComponents/ProductCategoryComponents/Header';
import Cards from '../../components/eB2BComponents/ProductCategoryComponents/Cards';
import FeaturedProducts from '../../components/eB2BComponents/ProductCategoryComponents/FeaturedProduct';
import SupplierSection from '../../components/eB2BComponents/ProductCategoryComponents/SupplierSection';
import InfoCardsSection from '../../components/eB2BComponents/ProductCategoryComponents/Footer';

function ProductCategory() {
  return (
    <>
      <Header />
      <Cards />
      <FeaturedProducts />
      <SupplierSection />
      <InfoCardsSection />
    </>
  );
}

export default ProductCategory;
