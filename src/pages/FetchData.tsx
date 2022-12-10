import React, {Component, useEffect, useState} from 'react';

// export class FetcAhData extends Component {
//   static displayName = FetcAhData.name;
//
//   constructor(props:any) {
//     super(props);
//     this.state = { forecasts: [], loading: true };
//   }
//
//   componentDidMount() {
//     this.populateWeatherData();
//   }
//
//   static renderForecastsTable(forecasts: any) {
//     return (
//       <table className="table table-striped" aria-labelledby="tableLabel">
//         <thead>
//           <tr>
//             <th>Date</th>
//             <th>Temp. (C)</th>
//             <th>Temp. (F)</th>
//             <th>Summary</th>
//           </tr>
//         </thead>
//         <tbody>
//           {forecasts.map(forecast =>
//             <tr key={forecast.date}>
//               <td>{forecast.date}</td>
//               <td>{forecast.temperatureC}</td>
//               <td>{forecast.temperatureF}</td>
//               <td>{forecast.summary}</td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     );
//   }
//
//   render() {
//
//     return (
//     );
//   }
//
// }

const populateWeatherData = async () =>  {
  const response = await fetch('weatherforecast');
  return await response.json();
}

const FetchData = () => {
  const [loading, setLoading] = useState(true);
  const [state, setState] = useState([]);
  // @ts-ignore
  useEffect( () => {
    populateWeatherData()
        .then(data => setState(data));
    setLoading(false);
  }, [])
  let contents = loading
      ? <p><em>Loading...</em></p>
      : <RenderForecastsTable forecasts={state} />
    return (
        <div>
          <h1 id="tableLabel">Weather forecast</h1>
          <p>This component demonstrates fetching data from the server.</p>
          {contents}
        </div>
          
    );
};

const RenderForecastsTable = (forecasts: any) => (
    <table className="table table-striped" aria-labelledby="tableLabel">
      <thead>
      <tr>
        <th>Date</th>
        <th>Temp. (C)</th>
        <th>Temp. (F)</th>
        <th>Summary</th>
      </tr>
      </thead>
      <tbody>
      {/*{forecasts.map((forecast: any) =>*/}
      {/*    <tr key={forecast.date}>*/}
      {/*        <td>{forecast.date}</td>*/}
      {/*        <td>{forecast.temperatureC}</td>*/}
      {/*        <td>{forecast.temperatureF}</td>*/}
      {/*        <td>{forecast.summary}</td>*/}
      {/*    </tr>*/}
      {/*)}*/}
      </tbody>
    </table>
)

export default FetchData;