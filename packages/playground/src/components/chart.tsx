import * as ChartJS from "chart.js";
import React, { useEffect, useRef } from "react";

interface ChartProps {
  onLoad: () => Promise<any>;
}

export default function Chart({onLoad}: ChartProps) {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) { return; }

    onLoad().then((result: any) => {
      // @ts-ignore
      const chart = new ChartJS.Chart(canvas, result);
    });
  }, [ref.current]);

  return <canvas width={400} height={400} ref={ref}></canvas>;
}
