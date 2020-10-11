import React from 'react';
import {Content} from './styles'
const Tag = ({ name, active }) => {
  return (
    <Content active={active}>
      {name}
    </Content>
  );
};

export default Tag;