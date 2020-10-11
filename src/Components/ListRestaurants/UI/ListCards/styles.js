import React from 'react';
import { Grid, Row, Col } from "react-flexbox-grid";

const ListCards = () => {
  return (
    <Grid fluid>
        <Row>
          <Col  xs={12} sm={6} md={6} lg={6}>
          </Col>
          <Col  xs={12} sm={6} md={6} lg={6}>
          </Col>
        </Row>
      </Grid>
  );
};

export default ListCards;