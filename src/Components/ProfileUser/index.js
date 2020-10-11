import React from 'react'
import { Grid, Row, Col } from "react-flexbox-grid";
import InformationPersonal from './UI/InformationPersonal'
import Ubication from './UI/Ubication'
const ProfileUser = () => {
  return (
    <Grid fluid>
      <Row>
        <Col xs={12} sm={8} md={8} lg={8}>
          <Ubication></Ubication>
        </Col>
        <Col xs={12} sm={8} md={4} lg={4}>
          <InformationPersonal />
        </Col>
      </Row>
    </Grid>
  );
};

export default ProfileUser;

