// Accessibility - done in DO-2400

import { ElementType, FunctionComponent } from "react";

export interface NavigationBarProfileProps {
  /**
   * Additional text to show below the user name/age/status.
   */
  additional?: string;
  /**
   * "onClick" handler attached to the element
   */
  onClick?: () => void;
  /**
   * The accessibility properties object. Used to add more a11y control over the component
   */
  a11y?: {
    /**
     * Extended text including name, age, online status, extra information (if visually presented) for continuous screen reading of ProfileInfo
     */
    profileInfoLabel?: string;
  };
}

const NavigationBarProfile: FunctionComponent<NavigationBarProfileProps> = ({
  user,
  additional,
  onClick,
  a11y
}) => {
  const ActionTag = (onClick ? "button" : "div") as ElementType;

  return (
    <ActionTag
      className="csms-navigation-bar__profile-content"
      onClick={onClick}
    >
      <span className="csms-navigation-bar__profile-content-avatar">
        <img src="https://via.placeholder.com/36.png/09f/fff" />
      </span>
      <div className="csms-navigation-bar__profile-content-right">
        {user && user.name ? (
          <span className="csms-navigation-bar__profile-content-info">
            {user.name}
          </span>
        ) : null}
        {additional ? (
          <span className="csms-navigation-bar__profile-content-additional ellipsis">
            {additional}
          </span>
        ) : null}
      </div>
    </ActionTag>
  );
};

// @ts-ignore

export default NavigationBarProfile;
