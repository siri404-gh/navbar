// Accessibility - done in DO-2400

import { FunctionComponent } from "react";

import classnames from "classnames";

export interface NavigationBarIconProps {
  /**
   * If the icon is disabled
   */
  isDisabled?: boolean;
  /**
   * "onClick" handler attached to the element
   */
  onClick?: () => void;
  /**
   * The accessibility properties object. Used to add more a11y control over the component
   */
  a11y: {
    /**
     * text representation for the icon
     */
    iconLabel: string;
    /**
     * text representation for the notification
     */
    notificationLabel?: string;
  };
}

const NavigationBarIcon: FunctionComponent<NavigationBarIconProps> = ({
  isDisabled,
  onClick,
  children,
  a11y
}) => {
  const className = classnames({
    "csms-navigation-bar__icon": true,
    "csms-navigation-bar__icon--is-disabled": isDisabled
  });

  return (
    <button
      className={className}
      onClick={!isDisabled ? onClick : undefined}
      data-qa="navbar-icon"
      aria-disabled={isDisabled}
    >
      {children}
    </button>
  );
};

export default NavigationBarIcon;
