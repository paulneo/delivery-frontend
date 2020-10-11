import React from 'react';
import Panel from '../Utilities/Panel'
import CoverPage from './UI/CoverPage'
import Filter from './UI/Filter'
import ListCards from './UI/ListCards'
import Order from './UI/Order'
import { Grid, Row, Col } from "react-flexbox-grid";

const Restaurant = () => {
  return (
    <Panel padding={false}>
      <CoverPage></CoverPage>
      <Grid fluid>
        <Row>
          <Col  xs={12} sm={8} md={8} lg={8}>
            <Filter />
            <ListCards/>
          </Col>
          <Col  xs={12} sm={4} md={4} lg={4}>
            <Order />
          </Col>
        </Row>
      </Grid>
    </Panel>
  );
};

export default Restaurant;