import axios from 'axios';
import React, { useEffect, useState } from 'react'
import SortButton from '../../Components/chronology-comps/SortButton';

export default function Chronology() {

  const [timelineR, setTimelineR] = useState()
  const [timelineRI, setTimelineRI] = useState()
  const [sorted, setSorted] = useState(false)

  const getTimelineData = async () => {
    try {
    const timelineData = await axios.get(`http://localhost:3005/characters`);
    setTimelineR(timelineData.data.filter((c) => c.age !== null).sort((a, b) => a.age - b.age));
    setTimelineRI(timelineRI.data.filter((c) => c.age !== null).sort((a, b) => b.age - a.age));
    } catch (error) {
    console.error("Error fetching timeline data:", error);
    }
  };
  
  useEffect(()=>{
  getTimelineData();
  }, []);
  // <i className="fa-solid fa-chevron-up" style={{color: 'black'}}></i>
  // const timelineR = timeline?
  // const timelineRI = timeline?
  setTimeout(() => {
    console.log("pepe", timelineR)
  }, 2000);
  

  return (
    <div className='chronology'>
      <div className='chronology-panel'>
      {/* <button className='sort-btn' onClick={()=>setSorted(!sorted)}>{sorted?(timelineR[0].age):(timelineRI[0].age)}</button> */}
        {timelineR && timelineRI && sorted?
        (timelineR?.map((item, i) =>
          <div key={i}>
            <h2 className='chronology-panel-age'>{item.age}</h2>
            <h2 className='chronology-panel-age'>{item.name}</h2>
            <img height="200" src={`http://localhost:3005${item.image}`} alt={item.name}/>
          </div>
        )):(timelineRI?.map((item, i) =>
          <div key={i}>
            <h2 className='chronology-panel-age'>{item.age}</h2>
            <h2 className='chronology-panel-age'>{item.name}</h2>
            <img height="200" src={`http://localhost:3005${item.image}`} alt={item.name}/>
          </div>
        ))
        }
      </div>
    </div>
  )
}
