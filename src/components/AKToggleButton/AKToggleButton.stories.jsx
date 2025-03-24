import React, { useState } from "react";
import AKToggleButton from "./AKToggleButton";
import "./AKToggleButton.css"; 

export default {
  title: "Components/AKToggleButton",
  component: AKToggleButton,
};

const Template = (args) => {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <AKToggleButton
      {...args}
      isOn={isToggled}
      onChange={(state) => setIsToggled(state)}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  onLabel: "On",
  offLabel: "Off",
  onColor: "#4CAF50",  // Green when ON
  offColor: "#D32F2F", // Red when OFF
  toggleBgColor: "#ddd", // Gray background
  sliderColor: "#ffffff", // White slider
  labelOnColor: "#ffffff", // White text when ON
  labelOffColor: "#555555", // Dark text when OFF
  borderColor: "#000000", // Black border
  borderSize: 2, // 2px border size
  borderRadius: 50, // Fully rounded corners
};

export const CustomStyled = Template.bind({});
CustomStyled.args = {
  onLabel: "Enabled",
  offLabel: "Disabled",
  onColor: "#007bff",  // Blue when ON
  offColor: "#ff5722", // Orange when OFF
  toggleBgColor: "#f1f1f1", // Light gray background
  sliderColor: "#000000", // Black slider
  labelOnColor: "#ffffff", // White text when ON
  labelOffColor: "#000000", // Black text when OFF
  borderColor: "#ff0000", // Red border
  borderSize: 3, // 3px border size
  borderRadius: 20, // Slightly rounded corners
};
