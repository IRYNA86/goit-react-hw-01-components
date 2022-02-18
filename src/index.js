import React from 'react';
import ReactDOM from 'react-dom';
// import App  from './components/App.jsx';
import App from './App'
import reportWebVitals from './reportWebVitals';
import './index.css';



// ReactDOM.render(
//   <App/>,
//   document.getElementById('root'));
  ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// const data = datas[0];
  
// function Statistics(props) {
//   return (
//     <section class="statistics">
//       <h2 class="title">Upload stats</h2>

//       <ul class="stat-list">
//         <li class="item">
//           <span class="label">{props.label}</span>
//           <span class="percentage">{props.percentage}</span>
//         </li>
//         <li class="item">
//           <span class="label">{props.label}</span>
//           <span class="percentage">{props.percentage}</span>
//         </li>
//         <li class="item">
//           <span class="label">{props.label}</span>
//           <span class="percentage">{props.percentage}</span>
//         </li>
//         <li class="item">
//           <span class="label">{props.label}</span>
//           <span class="percentage">{props.percentage}</span>
//         </li>
//       </ul>
//     </section>);
//   }
// ReactDOM.render(
//   <Statistics
//     id={data.id}
//     label={data.label}
//     percentage={data.percentage}
//   />,
// document.getElementById('root'));

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
