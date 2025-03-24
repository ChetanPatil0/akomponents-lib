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
  onColor: "#4CAF50",  
  offColor: "#D32F2F", 
  toggleBgColor: "#ddd", 
  sliderColor: "#ffffff", 
  labelOnColor: "#ffffff", 
  labelOffColor: "#555555", 
  borderColor: "#000000", 
  borderSize: 2, 
  borderRadius: 50, 
};

export const CustomStyled = Template.bind({});
CustomStyled.args = {
  onLabel: "Enabled",
  offLabel: "Disabled",
  onColor: "#007bff",  
  offColor: "#ff5722", 
  toggleBgColor: "#f1f1f1", 
  sliderColor: "#000000", 
  labelOnColor: "#ffffff", 
  labelOffColor: "#000000", 
  borderColor: "#ff0000", 
  borderSize: 3, 
  borderRadius: 20, 
};
