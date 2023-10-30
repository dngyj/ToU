import SingleCoastLine from "./singleCoastLine";
import { normalizeCoordinates } from "./../../../../utils/normalizeCoordinates";

import coastLineData from "../../../../assets/coastline_small.json";

export default function CoastLine({ radius }: { radius: number }) {
  const coordinatesList = coastLineData.features.map((data) =>
    normalizeCoordinates(data.geometry.coordinates as Array<[number, number]>)
  );

  return (
    <>
      {coordinatesList.map((coordinates, index) => {
        return (
          <>
            {/* 해안선 내부의 색상 */}
            <SingleCoastLine
              coordinates={coordinates}
              material={{ color: "black", linewidth: 1 }}
              radius={radius}
              key={index}
            />
            {/* 해안선 외부의 색상 */}
            <SingleCoastLine
              coordinates={coordinates}
              material={{ color: "gray", linewidth: 5 }}
              radius={radius + 0.01}
              key={`bold-${index}`}
            />
          </>
        );
      })}
    </>
  );
}