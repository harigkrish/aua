const data = [
  {
    name: "Turnover",
    year: "2000",
    gdp: 1811346869605.24,
  },
  {
    name: "Turnover",
    year: "2001",
    gdp: 139395718865.3,
  },
  {
    name: "Turnover",
    year: "2002",
    gdp: 8470550015081.55,
  },
  {
    name: "Turnover",
    year: "2003",
    gdp: 1660287965662.68,
  },
  {
    name: "Turnover",
    year: "2004",
    gdp: 1955347004963.27,
  },

  {
    name: "Total Cost",
    year: "2000",
    gdp: 10252345464000,
  },
  {
    name: "Total Cost",
    year: "2001",
    gdp: 10581821399000,
  },
  {
    name: "Total Cost",
    year: "2002",
    gdp: 10936419054000,
  },
  {
    name: "Total Cost",
    year: "2003",
    gdp: 31458243878000,
  },
  {
    name: "Total Cost",
    year: "2004",
    gdp: 12213729147000,
  },

  {
    name: "Gross Profit",
    year: "2000",
    gdp: 1657816613708.58,
  },
  {
    name: "Gross Profit",
    year: "2001",
    gdp: 1640246149417.01,
  },
  {
    name: "Gross Profit",
    year: "2002",
    gdp: 1784473920863.31,
  },
  {
    name: "Gross Profit",
    year: "2003",
    gdp: 2053018775510.2,
  },
  {
    name: "Gross Profit",
    year: "2004",
    gdp: 2416931526913.22,
  },

  {
    name: "Welding Profit",
    year: "2000",
    gdp: 259710142196.94,
  },
  {
    name: "Welding Profit",
    year: "2001",
    gdp: 5106602070620.5,
  },
  {
    name: "Welding Profit",
    year: "2002",
    gdp: 345470494417.86,
  },
  {
    name: "Welding Profit",
    year: "2003",
    gdp: 430347770731.79,
  },
  {
    name: "Welding Profit",
    year: "2004",
    gdp: 9191016690742.8,
  },
];

export const lineConfig = {
  data,
  xField: "year",
  yField: "gdp",
  seriesField: "name",
  yAxis: {
    label: {
      formatter: (v) => `${(v / 10e8).toFixed(1)} B`,
    },
  },
  color: ["#C19FF3", "#5791B9", "#C45C77", "#ECB66C"],
  legend: {
    position: "bottom-left",
    type: "continue",
    heigth: 25,
    itemHeight: 25,
  },
  lineStyle: { opacity: 1 },
  smooth: false,

  animation: {
    appear: {
      animation: "path-in",
      duration: 10000,
    },
  },
};
