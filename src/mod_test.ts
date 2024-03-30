// mod_test.ts
import { assert } from "https://deno.land/std@0.192.0/testing/asserts.ts";
import { wrapChartJsToReturnSvg, freshChartsChartFnFactory } from "./mod.ts";
import { Chart } from "npm:chart.js@4.4.2/auto";
import annotationPlugin from "npm:chartjs-plugin-annotation@3.0.1/";

Chart.register(annotationPlugin);
// import { RemoveChartJsOptionsUnsupportedForSvgs } from "./chart-js-svg/UnsupportedChartJsOptions.ts";
// import type { ChartType, ChartOptions as UnsafeChartOptions } from "npm:chart.js@4.4.2/";
// export type ChartOptions<TType extends ChartType = ChartType> = RemoveChartJsOptionsUnsupportedForSvgs<UnsafeChartOptions<TType>>

Deno.test("Generates SVG for chart with wrapped ChartJs", () => {
	const chartJsSvg = wrapChartJsToReturnSvg(Chart);
	const svg = chartJsSvg({width: 1024, height: 768}, {type: "line", data: {labels: ["a", "b", "c"], datasets: [{label: "d", data: [1, 2, 3]}]}});
	assert(svg.startsWith("<svg"));
});

Deno.test("Generates SVG for chart with freshCharts compat API", () => {
	const chartJsSvg = freshChartsChartFnFactory(Chart);
	const svg = chartJsSvg({width: 1024, height: 768, type: "line", data: {labels: ["a", "b", "c"], datasets: [{label: "d", data: [1, 2, 3]}]}});
	assert(svg.startsWith("<svg"));
});
