import React from 'react';
import { Grid, Row, Col } from "react-flexbox-grid";

const ListCards = () => {
  return (
    <Grid fluid>
        <Row>
          <Col  xs={12} sm={8} md={8} lg={8}>
          </Col>
          <Col  xs={12} sm={8} md={8} lg={8}>
          </Col>
        </Row>
      </Grid>
  );
};

export default ListCards;