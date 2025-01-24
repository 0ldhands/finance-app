import React, { useState } from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
} from "chart.js";
import '../css/Home.css'

  ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

  const Exgraph = ({exg}) => {
   
    const[groc,setGroc]=useState(0);
    const[food,setFood]=useState(0);
    const[enter,setEnter]=useState(0);
    const[shop,setShop]=useState(0);
    const[other,setOther]=useState(0);

    const add=()=>{
      let grocfil=exg.filter((crr)=>crr.expense == 'Grocery')
      let sum1=[0,...grocfil]
      let groctot=sum1.reduce((tot,pre)=>tot+=Number(pre.amount))
      setGroc(()=>groctot)

      let foodfil=exg.filter((crr)=>crr.expense == 'Food')
      let sum2=[0,...foodfil]
      let foodtot=sum2.reduce((tot,pre)=>tot+=Number(pre.amount))
      setFood(()=>foodtot)

      let enterfil=exg.filter((crr)=>crr.expense == 'Entertainment')
      let sum3=[0,...enterfil]
      let entertot=sum3.reduce((tot,pre)=>tot+=Number(pre.amount))
      setEnter(()=>entertot)

      let shopfil=exg.filter((crr)=>crr.expense == 'Shopping')
      let sum4=[0,...shopfil]
      let shoptot=sum4.reduce((tot,pre)=>tot+=Number(pre.amount))
      setShop(()=>shoptot)

      let otherfil=exg.filter((crr)=>crr.expense == 'Others')
      let sum5=[0,...otherfil]
      let othertot=sum5.reduce((tot,pre)=>tot+=Number(pre.amount))
      setOther(()=>othertot)
      
    }
    

    setInterval(add,1000)
    const data = {
      labels: ["Grocery", "Food", "Entertainment","Shopping","Others"],
      datasets: [
        {
          label: "# of Votes",
          data:[groc,food,enter,shop,other],
          backgroundColor: ["rgba(255, 238, 0, 0.8)", "rgba(255, 2, 200, 0.8)", "rgba(73, 255, 1, 0.8)","rgba(71, 68, 233, 0.8)","rgba(255, 39, 1, 0.8)"],
          borderColor: ["rgba(28, 82, 74, 0.8)", "rgba(9, 5, 68, 0.8)", "rgba(13, 65, 35, 0.8)","rgba(7, 2, 20, 0.8)","rgba(68, 22, 25, 0.8)"],
          borderWidth: 1,
        },
      ],
    };
    const options = {
        responsive: true,
        plugins: {
          Legend: {
            position: "top",
          },
          Tooltip: {
            enabled: true,
          },
        },
      };
    
      return (
        <div className="graphs">
          Incgraph
            <Pie data={data} options={options} />
        </div>
      );
  };
 
export default Exgraph;
