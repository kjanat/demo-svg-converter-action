import * as React from "react";
import type { SVGProps } from "react";
const SvgLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={1024} height={1024} {...props}>
    <defs>
      <style>
        {
          "@import url(https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap);.logo_svg__logo-text .logo_svg__bold{font-weight:700;font-size:80px}"
        }
      </style>
    </defs>
    <path fill="#7B4EFF" d="M0 0h1024v1024H0z" />
    <text
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
      <tspan x={80} y={450} className="logo_svg__bold">
        {"SVG Converter"}
      </tspan>
      <tspan x={80} y={550} className="logo_svg__bold">
        {"@github"}
      </tspan>
      <tspan
        x={80}
        y={650}
        style={{
          fontWeight: 500,
          fontStyle: "italic",
          fontSize: 60,
        }}
      >
        {"kjanat/svg-converter-action"}
      </tspan>
    </text>
  </svg>
);
export default SvgLogo;

