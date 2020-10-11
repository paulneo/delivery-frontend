import React from 'react';
import Panel from "../../../Utilities/Panel";
import { Select, ContentInput } from "./styles";
import GoogleMapReact from 'google-map-react';

const Ubication = () => {
  return (
    <Panel>
      <div style={{ height: "540px", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAhKDLhGjYywTXl3XR1OK2pf6AfhtWT8kA" }}
          defaultCenter={{
            lat: 59.95,
            lng: 30.33,
          }}
          defaultZoom={11}
        >
          <div lat={59.955413} lng={30.337844} />
        </GoogleMapReact>
      </div>
    </Panel>
  );
};

export default Ubication;