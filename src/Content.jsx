import React, { useState, useEffect } from "react";
import CoffeCard from "./CoffeCard";
import { Grid } from "@material-ui/core";
import { getProducts } from "./api/product";
import photo from "./Images/alka.png";

const Content = () => {
  const [Product, setProduct] = useState([]);
  useEffect(() => {
    getProducts().then((data) => {
      setProduct(data);
    });
  }, []);

  console.log(Product);

  return (
    <div style={{padding:"20px"}}>
      <Grid container spacing={2}>
        {Product.map((item) => (
          <Grid item xs={12} sm={12} md={4}>
            <CoffeCard
              title={item.name}
              subtitle={item.price}
              avatarSrc={item.ImagePath}
              imgSrc={item.ImagePath}
              
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
export default Content;
