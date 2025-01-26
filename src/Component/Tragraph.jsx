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

  const Tragraph = ({tra}) => {
   
    const[cash,setCash]=useState(0);
    const[upi,setUpi]=useState(100);
    const[card,setCard]=useState(0);

    const add=()=>{
      let casfil=tra.filter((crr)=>crr.payment == 'Cash')
      let sum1=[0,...casfil]
      let castot=sum1.reduce((tot,pre)=>tot+=Number(pre.amount))
      setCash(()=>castot)

      let upifil=tra.filter((crr)=>crr.payment == 'Upi')
      let sum2=[0,...upifil]
      let upitot=sum2.reduce((tot,pre)=>tot+=Number(pre.amount))
      setUpi(()=>upitot)

      let carfil=tra.filter((crr)=>crr.payment == 'Card')
      let sum3=[0,...carfil]
      let cartot=sum3.reduce((tot,pre)=>tot+=Number(pre.amount))
      setCard(()=>cartot)
    }
    

    setInterval(add,1000)
    const data = {
      labels: ["Cash", "Upi", "Card"],
      datasets: [
        {
          label: "# of Votes",
          data:[cash,upi,card],
          backgroundColor: ["rgba(4, 255, 222, 0.8)", "rgba(17, 0, 255, 0.8)", "rgba(0, 255, 106, 0.8)"],
          borderColor: ["rgba(28, 82, 74, 0.8)", "rgba(9, 5, 68, 0.8)", "rgba(13, 65, 35, 0.8)"],
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
          <h3 style={{textAlign:"center"}}>Transaction Tracking</h3>
            <Pie data={data} options={options} />
        </div>
      );
  };
 
export default Tragraph;
