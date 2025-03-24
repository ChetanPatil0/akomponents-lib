import React from "react";
import "./AKToggleButton.css";

const AKToggleButton = ({
  isOn,
  onChange,
  onLabel,
  offLabel,
  onColor,
  offColor,
  toggleBgColor,
  sliderColor,
  labelOnColor,
  labelOffColor,
  borderColor,
  borderSize,
  borderRadius,
}) => {
  return (
    <div
      className={`ak-toggle-container ${isOn ? "on" : ""}`}
      onClick={() => onChange(!isOn)}
      style={{
        backgroundColor: isOn ? onColor : offColor,
        border: `${borderSize}px solid ${borderColor}`,
        borderRadius: `${borderRadius}px`,
      }}
    >
      <span
        className={`ak-toggle-label ${isOn ? "on" : "off"}`}
        style={{ color: isOn ? labelOnColor : labelOffColor }}
      >
        {isOn ? onLabel : offLabel}
      </span>
      <div
        className="ak-toggle-slider"
        style={{
          backgroundColor: sliderColor,
          borderRadius: `${borderRadius / 2}px`,
        }}
      ></div>
    </div>
  );
};

export default AKToggleButton;
