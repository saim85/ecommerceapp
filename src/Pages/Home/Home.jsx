import React, { useContext } from "react";
import Layout from "../../Components/Layout/Layout";
// import MyContext from "../../Context/data/Mycontext";
import Herosection from "../../Components/Herosection/Herosection";
import Filter from "../../Components/Filter/Filter";
import ProductCard from "../../Components/ProductCard/ProductCard";
import Track from "../../Components/Track/Track";
import Testimonials from "../../Components/Testimonials/Testimonials";




function Home() {

  return (
    <>
      <Layout>
        <Herosection/>
        <Filter/>
        <ProductCard/>
        <Track/>
        <Testimonials/>
      </Layout>
    </>
  );
}

export default Home;
