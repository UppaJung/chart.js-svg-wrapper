# Wrap Chart.js to generate SVGs

Generate SVGs using Chart.js

```ts
// Use any version of `Chart.js` you like, even if it's been updated
// more recently than this module. So long as the underlying structure
// of the top-level parameters haven't changed, the new types will
// be automatically updated in the wrapped version.
import { Chart } from "npm:chart.js@/auto";

// Now wrap it with this module
import { wrapChartJsToReturnSvg } from "jsr:@UppaJung/chart.js-wrapper-svg";
const chartJsSvg = wrapChartJsToReturnSvg(Chart);

// Now just call the new function with a first parameter that specifies the width and height,
// and the second parameter matching the second parameter passed to
// `new Chart()` in `Chart.js`
const svg = chartJsSvg({
		width: 1024,
		height: 768
	}, {
		type: "line",
		data: {
			labels: ["a", "b", "c"],
			datasets: [{label: "d", data: [1, 2, 3]}]
		}
	}
);
```
