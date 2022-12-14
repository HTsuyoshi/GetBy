import React from 'react';
import styles from './PaginaMapa.module.css';
import GoogleMapReact from 'google-map-react';
import IconLocation from '../../components/IconLocation/IconLocation';

const PaginaMapa = () => {
  const defaultProps = {
    center: {
      lat: -23.606680,
      lng: -46.661251
    },
    zoom: 10
  };

  return(
    <div className={styles.divPaginaMapa} data-testid="PaginaMapa">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <IconLocation
          lat={-23.5582242}
          lng={-46.6806130}
          text="Localização"
        />
      </GoogleMapReact>  
    </div>
  )
};

PaginaMapa.propTypes = {};

PaginaMapa.defaultProps = {};

export default PaginaMapa;
