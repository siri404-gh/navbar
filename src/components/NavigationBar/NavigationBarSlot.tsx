// Accessibility - done in DO-2400

import { ReactNode, FunctionComponent } from "react";

import classnames from "classnames";

export interface NavigationBarSlotProps {
  /**
   * The content to show in the particular area
   */
  children?: ReactNode;
  /**
   * Defines a position of the slot
   */
  slot: "primary" | "secondary";
  /**
   * If the slot is wider to visually balance the navigation bar
   */
  isWide?: boolean;
}

const NavigationBarSlot: FunctionComponent<NavigationBarSlotProps> = ({
  children,
  slot,
  isWide
}) => {
  const className = classnames({
    "csms-navigation-bar__slot": true,
    [`csms-navigation-bar__slot--${slot}`]: slot,
    "csms-navigation-bar__slot--is-wide": isWide
  });

  return (
    <div className={className} data-qa={`navbar-slot-${slot}`}>
      {children}
    </div>
  );
};

export default NavigationBarSlot;
