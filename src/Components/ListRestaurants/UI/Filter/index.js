import React from 'react';
import Tag from '../Tag'
import Input from '../../../Utilities/Input'
import { Content,Flex, InputRes, Search, Tags } from './styles'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Filter = () => {
  return (
    <Content>
      <Flex>
          <Tags>
            <Tag active name='Pollerias'/> 
            <Tag active={false} name='Pizzerias'/>
          </Tags>
          <InputRes>
            <Input type="text" placeholder="Buscar" />
            <Search>
                <FontAwesomeIcon icon={faSearch} />
            </Search>
          </InputRes>
      </Flex>
    </Content>
  );
};

export default Filter;