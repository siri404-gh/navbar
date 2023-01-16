// Accessibility - done in DO-2400

import { ElementType, FunctionComponent } from "react";
import Ellipsis from "../../helperComponents/Ellipsis";

export interface NavigationBarTitleProps {
  /**
   * The text to show as title.
   */
  text: string;
  /**
   * "onClick" handler attached to the element
   */
  onClick?: () => void;
  /**
   * The accessibility properties object. Used to add more a11y control over the component
   */
  a11y?: {
    /**
     * If component is hidden for screenreaders to maintain logical headers structure
     * @platform mw
     */
    ariaHidden?: boolean;
  };
}

const NavigationBarTitle: FunctionComponent<NavigationBarTitleProps> = ({
  text,
  onClick,
  a11y
}) => {
  const ActionTag = (onClick ? "button" : "div") as ElementType;

  return (
    <ActionTag
      className="csms-navigation-bar__title"
      onClick={onClick}
      data-qa="navbar-title"
      aria-hidden={a11y?.ariaHidden}
    >
      <Ellipsis>{text}</Ellipsis>
    </ActionTag>
  );
};

export default NavigationBarTitle;
