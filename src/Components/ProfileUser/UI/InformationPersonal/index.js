import React from 'react';
import Panel from "../../../Utilities/Panel";
import Input from '../../../Utilities/Input'

const InformationPersonal = () => {
  return (
    <Panel>
      <div>
        <p>Información Personal</p>
        <div>
          <Input type='text' placeholder='Nombre'/>
        </div>
      </div>
      <div></div>
    </Panel>
  );
};

export default InformationPersonal;