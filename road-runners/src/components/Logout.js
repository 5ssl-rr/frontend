import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


export default function Logout(props){
    const navigate = useNavigate()
    useEffect(() => {
        localStorage.removeItem('token');
        props.setShowNav(false)
        navigate("/");
      }, [navigate, props]);
}