import React, { useState, useEffect } from "react";
import Map from "./Components/Map";
import Loading from "./Components/Loading";
import './App.css';
import axios from "axios";

function App() {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get('https://eonet.gsfc.nasa.gov/api/v2.1/events');
      // console.log(data)
      setEventData(data.events);
      setLoading(false);
      // console.log("EventData effect : ", eventData);
    }
    fetchData();
  }, []);

  return (
    <div className="container">
      <h2 className="heading"> Wildfire Tracker (NASA API) </h2>
      { loading ? <Loading /> :<Map eventData={eventData} />
      }
    </div>
  );
}
export default App;