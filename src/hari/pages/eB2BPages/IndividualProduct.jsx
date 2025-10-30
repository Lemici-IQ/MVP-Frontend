import React from 'react';
import Header from '../../components/eB2BComponents/IndividualProductComponents/Header';
import Cards from '../../components/eB2BComponents/IndividualProductComponents/Cards';
import Form from '../../components/eB2BComponents/IndividualProductComponents/Form';
import RecommendedSupplier from '../../components/eB2BComponents/IndividualProductComponents/RecommendedSuppliers';

function IndividualProduct() {
  return (
    <>
      <Header />
      <Cards />
      <Form />
      <RecommendedSupplier />
    </>
  );
}

export default IndividualProduct;
