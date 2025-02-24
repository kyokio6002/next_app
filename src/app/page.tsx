"use client";

import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";


export default function Home() {

  const data = [
    { week: "week A", component1: 4000, component2: 2400},
    { week: "week B", component1: 3000, component2: 1398},
    { week: "week C", component1: 2000, component2: 9800},
    { week: "week D", component1: 2780, component2: 3908},
    { week: "week E", component1: 1890, component2: 4800},
    { week: "week F", component1: 2390, component2: 3800},
    { week: "week G", component1: 3490, component2: 4300},
  ];

  return (
    // TODO: コンポーネント化
    // https://github.com/recharts/recharts
    <>
      <LineChart
        width={1000}
        height={500}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="week" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="linear"
          dataKey="component1"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="linear" dataKey="component2" stroke="#82ca9d" />
      </LineChart>
    </>
  );
}
