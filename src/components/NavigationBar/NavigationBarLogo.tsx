// Accessibility - done in DO-2400

import { ReactNode, FunctionComponent, ElementType } from "react";

export interface NavigationBarLogoProps {
  /**
   * The children containing the logo to show.
   */
  children: ReactNode;
  /**
   * "onClick" handler attached to the element
   */
  onClick?: () => void;
  /**
   * The accessibility properties object. Used to add more a11y control over the component
   */
  a11y?: {
    /**
     * text representation for a logo element
     */
    label?: string;
    /**
     * If component is hidden for screenreaders to maintain logical headers structure
     * @platform mw
     */
    ariaHidden?: boolean;
  };
}

const NavigationBarLogo: FunctionComponent<NavigationBarLogoProps> = ({
  children,
  onClick,
  a11y
}) => {
  const ActionTag = (onClick ? "button" : "div") as ElementType;

  return (
    <ActionTag
      className="csms-navigation-bar__logo"
      onClick={onClick}
      data-qa="navbar-logo"
      aria-hidden={a11y?.ariaHidden}
    >
      <img src="https://via.placeholder.com/120x36.png/09f/fff" />
    </ActionTag>
  );
};

export default NavigationBarLogo;
