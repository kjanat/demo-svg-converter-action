import * as React from "react";
import Svg, { Defs, Path, Text, TSpan } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */
import type { SvgProps } from "react-native-svg";
const SvgLogo = (props: SvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={1024} height={1024} {...props}>
    <Defs></Defs>
    <Path fill="#7B4EFF" d="M0 0h1024v1024H0z" />
    <Text
      xmlSpace="preserve"
      className="logo_svg__logo-text"
      style={{
        fontFamily: "&quot",
        fontOpticalSizing: "auto",
        fontWeight: 400,
        fontStyle: "normal",
        fontVariationSettings: "&quot",
        textAnchor: "start",
        fill: "#fff",
      }}
    >
      <TSpan
        x={80}
        y={450}
        style={{
          fontWeight: 700,
          fontSize: 80,
        }}
      >
        {"SVG Converter"}
      </TSpan>
      <TSpan
        x={80}
        y={550}
        style={{
          fontWeight: 700,
          fontSize: 80,
        }}
      >
        {"@github"}
      </TSpan>
      <TSpan
        x={80}
        y={650}
        style={{
          fontWeight: 500,
          fontStyle: "italic",
          fontSize: 60,
        }}
      >
        {"kjanat/svg-converter-action"}
      </TSpan>
    </Text>
  </Svg>
);
export default SvgLogo;

