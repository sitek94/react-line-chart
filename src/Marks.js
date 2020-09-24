import React from 'react';
import { line, curveNatural } from 'd3';

export const Marks = ({
  data,
  radius,
  yScale,
  xScale,
  yValue,
  xValue,
  tooltipFormat,
}) => {

  const lineGenerator = line()
    .curve(curveNatural)
    .x(d => xScale(xValue(d)))
    .y(d => yScale(yValue(d)))
    (data);
    

  return (
    <g className="marks">
      <path d={lineGenerator} />
      {data.map((d, i) => (
        <circle
          key={i + '-' + yValue(d)}
          cx={xScale(xValue(d))}
          cy={yScale(yValue(d))}
          r={radius}
        >
          <title>{tooltipFormat(xValue(d))}</title>
        </circle>
      ))}
    </g>
  );
}
