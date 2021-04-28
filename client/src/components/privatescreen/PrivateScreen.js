import { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
import Home from "../../pages/Home"

const PrivateScreen = () => {

    const [error, setError] = useState("");
    const [privateData, setPrivateData] = useState("");


    useEffect(() => {
        const fetchPrivateDate = async () => {
          const config = {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("authToken")}`,
            },
          };
    
          try {
            const { data } = await axios.get("/api/private", config);
            setPrivateData(data.data);
          } catch (error) {
            localStorage.removeItem("authToken");
            setError("You are not authorized. Please login");
          }
        };
    
        fetchPrivateDate();
    
    },[]);


//     return(
//         error? <span className = "error-message">{error}</span> :<>
//     {/* <div style={{background: "green", color: 'white'}}>{privateData}
//     </div> */}
//     <Home/>
//         </>
//     )
// }

return error ? (
  <span className="error-message" style ={{fontSize: "50px", marginLeft:"17%"}} >{error}</span>
) : (
  <Home/>
  


);
};

    export default PrivateScreen; 