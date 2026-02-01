import { useState } from "react";
import { SnowScene } from "./SnowScene";
import { SnowSettings } from "./SnowSettings";

type Props = {
  initialDensity?: number;
  initialWind?: number;
  initialSize?: number;
  showSettings?: boolean;
  bgColor?: string;
  bgColor1?: string;
  bgColor2?: string;
  bgColor3?: string;
  colorStop1?: number;
  colorStop2?: number;
  colorStop3?: number;
};

export const SnowNightSceneApp = ({
  initialDensity = 80,
  initialWind = 30,
  initialSize = 6,
  showSettings = true,
  bgColor,
  bgColor1,
  bgColor2,
  bgColor3,
  colorStop1,
  colorStop2,
  colorStop3,
}: Props) => {
  const [density, setDensity] = useState(initialDensity);
  const [wind, setWind] = useState(initialWind);
  const [size, setSize] = useState(initialSize);

  return (
    <>
      <SnowScene 
        density={density} 
        wind={wind} 
        size={size} 
        bgColor={bgColor}
        bgColor1={bgColor1}
        bgColor2={bgColor2}
        bgColor3={bgColor3}
        colorStop1={colorStop1}
        colorStop2={colorStop2}
        colorStop3={colorStop3}
      />
      {showSettings && (
        <SnowSettings
          density={density}
          wind={wind}
          size={size}
          setDensity={setDensity}
          setWind={setWind}
          setSize={setSize}
        />
      )}
    </>
  );
};
