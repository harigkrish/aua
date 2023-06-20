const data = [
  {
    label: "PL",
    type: "Gross Profit",
    value: 181307,
  },
  {
    label: "PL",
    type: "Turnover",
    value: 1655020,
  },
  {
    label: "PL",
    type: "Welding Profit",
    value: 181307,
  },
  {
    label: "PL",
    type: "Total Cost",
    value: 1473713,
  },
  {
    label: "USA",
    type: "Gross Profit",
    value: 181307,
  },
  {
    label: "USA",
    type: "Turnover",
    value: 1655020,
  },
  {
    label: "USA",
    type: "Welding Profit",
    value: 181307,
  },
  {
    label: "USA",
    type: "Total Cost",
    value: 1473713,
  },
  {
    label: "France",
    type: "Gross Profit",
    value: 181307,
  },
  {
    label: "France",
    type: "Turnover",
    value: 1655020,
  },
  {
    label: "France",
    type: "Welding Profit",
    value: 181307,
  },
  {
    label: "France",
    type: "Total Cost",
    value: 1473713,
  },
  {
    label: "Germany",
    type: "Gross Profit",
    value: 181307,
  },
  {
    label: "Germany",
    type: "Turnover",
    value: 1655020,
  },
  {
    label: "Germany",
    type: "Welding Profit",
    value: 181307,
  },
  {
    label: "Germany",
    type: "Total Cost",
    value: 1473713,
  },
];
export const config = {
  data,
  isGroup: true,
  xField: "value",
  yField: "label",

  // color: ['#1383ab', '#c52125'],
  color: ["#C19FF3", "#5791B9", "#C45C77", "#ECB66C"],
  seriesField: "type",
  marginRatio: 0,
  style: {
    lineHeight: 20,
  },
  legend: {
    position: "right-bottom",
  },
  label: {
    position: "right",
    // 'left', 'middle', 'right'

    layout: [
      // {
      //   type: "interval-adjust-position",
      // },
      // {
      //   type: "interval-hide-overlap",
      // },
      // {
      //   type: "adjust-color",
      // },
    ],
    style: {
      fill: "#595959",
      fontSize: "10px",
      // fontFamily:
      //   '"Segoe UI", Roboto, "Helvetica Neue", Arial,\n    "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",\n    "Noto Color Emoji"',
      stroke: null,
      lineWidth: 0,
      // fontWeight: "bolder",
    },
  },
};
