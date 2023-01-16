// Accessibility - done in DO-2400

import { FunctionComponent } from "react";

const NavigationBarButtonText: FunctionComponent = ({ children }) => {
  return <div className="csms-navigation-bar__button-text">{children}</div>;
};

export default NavigationBarButtonText;
