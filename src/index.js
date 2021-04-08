import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// đổi tiển
// const UsdtoVnd = ({onAdd,value}) => {
//   const convertToVnd=(e)=>{
//     const price=e.target.value;
//     console.log(price);
//     const convertedPrice=price*23082.48;
//     onAdd("vnd",price,convertedPrice);
//   }
//   return (
//     <div>
//       USD: <input type="number" onChange={convertToVnd} value={value} step="1"/><br />
//     </div>
//   )
// }
// const VndtoUsd = ({onAdd,value}) => {
//   const convertToUsd=(e)=>{
//     const price=e.target.value;
//     const convertedPrice=price/23082.48;
//     console.log(convertedPrice);
//     onAdd("usd",price,convertedPrice)
//   }
//   return (
//     <div>
//       VND: <input type="number" onChange={convertToUsd} value={value} step="23000"/>
//     </div>
//   )
// }
// const MoneyChange = () => {
//   const [money,setMoney]=useState({
//     usd:0,
//     vnd:0
//   });
//   const handleChange=(nameConveredPrice,price,convertedPrice)=>{
//     const namePrice=nameConveredPrice=="vnd"?"usd":"vnd";
//     setMoney({
//       [namePrice]:price,
//       [nameConveredPrice]:convertedPrice
//     });
//   }
//   return (
//     <div className="container">
//       <h2>Đổi tiền</h2>
//       <UsdtoVnd onAdd={handleChange} value={money.usd}/>
//       <VndtoUsd onAdd={handleChange} value={money.vnd}/>
//       <hr />
//     </div>
//   )
// }
// đồng hồ
// const ComponentLife = () => {
//   const [count,setCount]=useState(0);
//   const [pause,setPause]=useState(false);
//   console.log("oke");
//   const pauseClock=()=>{
//     setPause(true);
//   }
//   const playClock=()=>{
//     setPause(false);
//   }
//   useEffect(()=>{
//     if(!pause){
//       var clock=setInterval(()=>{
//         setCount(count+1);
//       },1000);
//       return ()=>{
//         clearInterval(clock);
//       }
//     }
//   },[count,pause])
//   return (
//     <>
//       <h2>Đồng hồ</h2>
//       <button onClick={pauseClock}>Pause</button>
//       <button onClick={playClock}>Play</button>
//       {count}
//     </>
//   )
// }
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
