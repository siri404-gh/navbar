// Accessibility - done in DO-2400, DO-2490

import { FunctionComponent } from "react";

const NavigationBarSearch: FunctionComponent = ({
  value,
  onChange,
  onSubmit,
  showClear,
  onClear,
  innerRef,
  a11y
}) => (
  <div className="csms-navigation-bar__search">
    <input className="csms-navigation-bar__input" type="text" />
  </div>
);

export default NavigationBarSearch;
