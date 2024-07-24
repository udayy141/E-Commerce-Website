import React,{useState,useEffect} from 'react'
import { useNavigate,useLocation } from 'react-router-dom'

const Spinner = ({path="login"}) => {
  const [count,setCount] = useState(3)
  const navigate=useNavigate  ();
  const location = useLocation();

  useEffect(()=>{
    const interval= setInterval(() => {
      setCount((prevValue)=> --prevValue)
    }, 1000);
    count === 0 && navigate(`/${path}`,{
    state:   
      location.pathname
    })
    return ()=>{
      clearInterval(interval)
    }

  },[count,navigate,location,path])
  return (
    <>
     <div className='d-flex justify-content-center'>Redirecting to you in {count} sec</div>
    <div className="d-flex  justify-content-center align-items-center  " style={{height:"100vh"}}>
    
    <div class="spinner-grow text-primary" role="status">
</div>
<div class="spinner-grow text-secondary" role="status">
</div>
<div class="spinner-grow text-success" role="status">
</div>
<div class="spinner-grow text-danger" role="status">
</div>
<div class="spinner-grow text-warning" role="status">
</div>
<div class="spinner-grow text-info" role="status">
</div>
<div class="spinner-grow text-dark" role="status">
</div>
<br></br>


</div>



    </>
  )
}

export default Spinner