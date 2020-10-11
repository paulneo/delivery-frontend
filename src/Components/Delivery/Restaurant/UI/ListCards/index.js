import React from 'react';
import Card from '../Card'
import { Grid, Row, Col } from "react-flexbox-grid";

const ListCards = () => {
  return (
    <Grid fluid>
      <Row>
        <Col xs={12} sm={6} md={6} lg={6}>
          <Card 
            name='1/4 Pollo a la leña' 
            description='Pollo acompañado  papas fritas  y ensalada' 
            price='S/. 15.00' 
          />
        </Col>
        <Col xs={12} sm={6} md={6} lg={6}>
          <Card 
            name='1/2 Pollo a la leña' 
            description='Pollo acompañado  papas fritas  y ensalada' 
            price='S/. 28.00' 
          />
        </Col>
        <Col xs={12} sm={6} md={6} lg={6}>
          <Card 
            name='1 Pollo a la leña' 
            description='Pollo acompañado  papas fritas  y ensalada' 
            price='S/. 53.00' 
          />
        </Col>
      </Row>
    </Grid>
  );
};

export default ListCards;