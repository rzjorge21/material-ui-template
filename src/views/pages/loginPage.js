import React from "react";
import Button from '@material-ui/core/Button';


export default function LoginPage(props) {
    return(
      <Button variant="contained" onClick={()=>{
        props.history.push("/app")
      }}>Login</Button>
    )
}
