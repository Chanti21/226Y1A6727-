import axios from"axios";
import {fetchNumbers} from "./api/apiService";
export const fetchNumbers=async(type)=>{
    try{
        const response=await axios.get('http://localhost:5003/${type}');
        return response.data;
    }catch(error){
            console.error("error fetching data:",error);
            return null;
        }
    };