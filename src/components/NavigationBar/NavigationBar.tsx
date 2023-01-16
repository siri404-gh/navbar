// Accessibility - done in DO-2400

import { ReactNode, FunctionComponent, ElementType } from "react";

import classnames from "classnames";

export interface NavigationBarProps {
  /**
   * Child nodes to be rendered
   */
  children?: ReactNode;
  /**
   * Tag to give semantic meaning to the component depending on the context
   * @platform mw
   */
  tag?: "nav" | "header" | "div";
  /**
   * The accessibility properties object. Used to add more a11y control over the component
   */
  a11y?: {
    /**
     * Label for navigation if it's ambiguous
     */
    label?: string;
  };
}

const defaultProps = {
  tag: "nav"
} as const;

const NavigationBar: FunctionComponent<NavigationBarProps> = ({
  children,
  tag,
  a11y
}) => {
  const className = classnames({
    "csms-navigation-bar": true
  });

  const WrapperTag = (children ? tag || "nav" : "div") as ElementType;

  return (
    <WrapperTag className={className} data-qa="navbar" aria-label={a11y?.label}>
      {children}
    </WrapperTag>
  );
};

NavigationBar.defaultProps = defaultProps;

export default NavigationBar;
