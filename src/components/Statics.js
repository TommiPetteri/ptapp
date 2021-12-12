import React, { useState, useEffect } from "react";
import _ from 'lodash';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';


export default function Statics() {
  const [trainings, setTrainings] = useState([]);

  useEffect(() => fetchData(), []);

  const fetchData = () => {
    fetch('https://customerrest.herokuapp.com/gettrainings')
      .then(response => response.json())
      .then(data => setTrainings(data))
      .catch(err => console.error(err))
  }

  const ans = _(trainings)
    .groupBy('activity')
    .map((activ, id) => ({
      activity: id,
      duration: _.sumBy(activ, 'duration'),
    }))
    .value()

  console.log(ans);

  return (
    <div style={{ height: "calc(100vh - 64px)" }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart width={150} height={40} data={ans}>
          <Bar dataKey="duration" fill="#8884d8" />
          <XAxis dataKey="activity" />
          <YAxis/>
        </BarChart>
      </ResponsiveContainer>
    </div>

  );
}