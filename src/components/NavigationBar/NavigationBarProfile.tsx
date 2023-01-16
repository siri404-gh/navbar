// Accessibility - done in DO-2400

import { ElementType, FunctionComponent } from "react";

export interface NavigationBarProfileProps {
  /**
   * "onClick" handler attached to the element
   */
  onClick?: () => void;
}

const NavigationBarProfile: FunctionComponent<NavigationBarProfileProps> = ({
  onClick,
  children
}) => {
  const ActionTag = (onClick ? "button" : "div") as ElementType;

  return (
    <ActionTag className="csms-navigation-bar__profile" onClick={onClick}>
      {children}
    </ActionTag>
  );
};

export default NavigationBarProfile;
