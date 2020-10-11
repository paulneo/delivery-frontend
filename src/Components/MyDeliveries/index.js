import React from 'react';
import { Grid, Row, Col } from "react-flexbox-grid";
import Card from './UI/Card'
const MyDeliveries = () => {
  return (
    <Grid fluid>
      <Row>
        <Col xs={12} sm={4} md={4} lg={4}>
           <Card></Card>
        </Col>
        <Col xs={12} sm={4} md={4} lg={4}>
          <Card></Card>
        </Col>
      </Row>
    </Grid>
  );
};

export default MyDeliveries;