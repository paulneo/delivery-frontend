import React from 'react';
import Card from '../Card'
import { Grid, Row, Col } from "react-flexbox-grid";

const ListCards = () => {
  return (
    <Grid fluid>
      <Row>
        <Col xs={12} sm={3} md={3} lg={3}>
          <Card 
            name='El Tablón' 
          />
        </Col>
        <Col xs={12} sm={3} md={3} lg={3}>
          <Card 
            name='El Tablón' 
          />
        </Col>
        <Col xs={12} sm={3} md={3} lg={3}>
          <Card 
            name='El Tablón' 
          />
        </Col>
        <Col xs={12} sm={3} md={3} lg={3}>
          <Card 
            name='El Tablón' 
          />
        </Col>
        <Col xs={12} sm={3} md={3} lg={3}>
          <Card 
            name='El Tablón' 
          />
        </Col>
        <Col xs={12} sm={3} md={3} lg={3}>
          <Card 
            name='El Tablón' 
          />
        </Col>
        <Col xs={12} sm={3} md={3} lg={3}>
          <Card 
            name='El Tablón' 
          />
        </Col>
        <Col xs={12} sm={3} md={3} lg={3}>
          <Card 
            name='El Tablón' 
          />
        </Col>
      </Row>
    </Grid>
  );
};

export default ListCards;