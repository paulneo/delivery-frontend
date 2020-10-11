import React from 'react';
import Panel from '../Utilities/Panel'
import CoverPage from './UI/CoverPage'
import Filter from './UI/Filter'
import ListCards from './UI/ListCards'
import ModalCreate from './UI/ModalCreate'
import { Grid, Row, Col } from "react-flexbox-grid";

const Dishes = () => {
  return (
    <Panel padding={false}>
      <CoverPage></CoverPage>
      <Grid fluid style={{paddingBottom:'20px'}}>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <Filter />
            <ListCards/>
          </Col>
        </Row>
      </Grid>
      <ModalCreate></ModalCreate>
    </Panel>
  );
};

export default Dishes;