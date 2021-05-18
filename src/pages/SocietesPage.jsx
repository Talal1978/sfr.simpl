import React, {useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {selectSocieteList, setUserSocieteList, delocateSocieteList} from '../redux/slicers/societeListSlice';
import { setUserLoginDetails, selectUserToken, selectUserDetails } from '../redux/slicers/userSlice'
import axios from "axios";
// import ContextMenu from '../../components/RightClick/RightClick';
import Navbar from '../components/Navbar';
import { useHistory } from "react-router-dom";


const SocietesPage = () => {

    const dispatch = useDispatch();
    const userDetails = useSelector(selectUserDetails)
    const societes = useSelector(selectSocieteList);

    const setSocietes = (societes) => {
        dispatch(setUserLoginDetails({
          societes: societes.listSocietes,
        }))
      }

    const history = useHistory();

    const [fetchCount, setFetchCount] = useState(0);

    const fetchSocietes = async () => {
        
        const response = await axios.get("http://"+userDetails?.domain?.domain+":8000/api/get-societe-param/").catch((err) => {
            console.log("Erreur: ", err);
        })
        if (response)
        setSocietes(response.data);
    };

    useEffect(() => {
        if(userDetails === null) {
            history.push('/')
        }
        fetchSocietes();
    }, [userDetails,fetchCount]);

    console.log("Societes: ",societes );

    return (
    <div> 
        <Navbar />
        {/* <ContextMenu fetchCount={fetchCount} setFetchCount={setFetchCount}/>  */}
    </div>
    )
}

export default SocietesPage;