import axios from 'axios';
import React, { useEffect, useState } from 'react'
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
export default function Chronology() {

  const [timelineR, setTimelineR] = useState()
  const [timelineRI, setTimelineRI] = useState()
  const [sorted, setSorted] = useState(false)

const getTimelineData = async () => {
    try {
      const timelineData = await axios.get(`http://localhost:3005/characters`);
      const filteredTimelineData = timelineData.data.filter((c) => c.age !== null);
      setTimelineR(filteredTimelineData.slice().sort((a, b) => a.age - b.age));
      setTimelineRI(filteredTimelineData.slice().sort((a, b) => b.age - a.age));
    } catch (error) {
      console.error("Error fetching timeline data:", error);
    }
  };
  useEffect(()=>{
  getTimelineData();
  }, []);

  return (
    <SimpleBar className="scroll-bar">
    <div className='chronology'>
      {timelineR && 
        <button className='chronology-btn' onClick={() => setSorted(!sorted)}> {sorted ? timelineR[0].age : timelineRI[0].age} </button>
      }
      <div>
      {sorted ? <i className="fa-solid fa-arrow-down"></i>: <i className="fa-solid fa-arrow-up"></i>}
      </div>
      <div className='chronology-line'></div>
      <div className='chronology-panel'>
        {(sorted ? timelineR : timelineRI)?.map((item, index) => (
          <div   key={index} className={index % 2===0 ? 'chronology-panel-itemEven':"chronology-panel-itemOdd"} >
            <h6 className='chronology-panel-age'>{item.age}</h6>
            <h6 className='chronology-panel-age'>{item.name}</h6>
            <div  className='image-container'>
              <img className='image-container-image' src={`http://localhost:3005${item.image}`} alt={item.name}/>
            </div>
          </div>
        ))}
      </div>
    </div>
    </SimpleBar>

  )
}
