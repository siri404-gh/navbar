// Accessibility - done in DO-2400

import { FunctionComponent } from "react";

const NavigationBarMedia: FunctionComponent = ({ height, width }) => {
  return (
    <div className="csms-navigation-bar__media">
      <img src={`https://via.placeholder.com/${width}x${height}.png/09f/fff`} />
    </div>
  );
};

export default NavigationBarMedia;
