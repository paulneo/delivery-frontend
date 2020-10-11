import React from 'react';
import { Search, Restaurant, Title, ButtonRes, SearchRes, Box, ChangeRes, InputRes } from './styles'
import Input from '../Utilities/Input'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons';


const ListRestaurants = () => {
  return (
    <>
      <Box>
        <Restaurant>
          <div>
            <Title>Restaurantes</Title>
          </div>
          <SearchRes>
            <ButtonRes>
              <ChangeRes>
                <p>Pollerias</p>
              </ChangeRes>
              <ChangeRes>
                <p>Pizzerias</p>
              </ChangeRes>
            </ButtonRes>
            <InputRes>
              <Input type="text" placeholder="Buscar" />
              <Search>
                <FontAwesomeIcon icon={faSearch} />
              </Search>
            </InputRes>
          </SearchRes>
        </Restaurant>
      </Box>
    </>  
  );
};

export default ListRestaurants;