import React, {useState, useEffect} from "react";

// class Detail extends React.Component {
//   componentDidMount() {
//     const { location, history } = this.props;
//     if (location.state === undefined) {
//       history.push("/");
//     }
//   }
//   render() {
//     const { location } = this.props;
//     if (location.state) {
//       return <span>{location.state.title}</span>;
//     } else {
//       return null;
//     }
//   }
// }

function Detail({location, history}) {
  useEffect(()=>{
    if(location.state === undefined){
      history.push('/');
    }
  });
  if(location.state){
    return (
    <div>
      <p style={{color : "red", textAlign: "center", fontSize:"30px", alignItems:"center"}}>{location.state.title}</p>
      <hr></hr>
      <p style = {{color:"black", width:"50%",marginLeft:"400px", marginRight:"300px"}}>{location.state.summary} </p>
    </div>
    );
  }
  else{
    return null;
  }
}
export default Detail;
