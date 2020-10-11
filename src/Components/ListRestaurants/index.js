import React from 'react';
import Panel from '../Utilities/Panel'
import Filter from './UI/Filter'
import ListCards from './UI/ListCards'
import Title from './UI/Title'
import { Grid, Row, Col } from "react-flexbox-grid";


const ListRestaurants = () => {
  return (
    <Panel padding={false}>
      <Title></Title>
      <Grid fluid style={{paddingBottom:'20px'}}>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <Filter />
            <ListCards/>
          </Col>
        </Row>
      </Grid>
    </Panel>
  );
};

export default ListRestaurants;