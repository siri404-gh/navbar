// Accessibility - done in DO-2400

import { FunctionComponent } from "react";

import classnames from "classnames";

export interface NavigationBarButtonTextProps {
  /**
   * If the button text is disabled
   */
  isDisabled?: boolean;
  /**
   * "onClick" handler attached to the element
   */
  onClick?: () => void;
  /**
   * data-qa attributes to apply to the element
   * @notice all the object keys must start with "data-qa" (this is validated via a prop-type custom function)
   */
  dataQA?: {
    [dataQaAttribute: string]: string;
  };
}

const NavigationBarButtonText: FunctionComponent<NavigationBarButtonTextProps> = ({
  children,
  isDisabled,
  onClick,
  dataQA
}) => {
  const className = classnames({
    "csms-navigation-bar__button": true,
    "csms-navigation-bar__button--is-disabled": isDisabled
  });

  return (
    <button
      className={className}
      onClick={!isDisabled ? onClick : undefined}
      data-qa="navbar-link"
      aria-disabled={isDisabled}
      {...dataQA}
    >
      {children}
    </button>
  );
};

export default NavigationBarButtonText;
