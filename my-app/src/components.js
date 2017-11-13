import React from 'react';

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }

  const Hello = <Welcome name ='Testing.!'/> 

function Multiple() {
    return (<div>
        <Welcome name="Sara!" />
        <Welcome name="Cahal!" />
        <Welcome name="Edite!" />
      </div>
    );  
}


// class Welcome extends React.Component {
//     render() {
//       return <h1>Hello, {this.props.name}</h1>;
//     }
//   }
  
 

   export default Hello ;
export {Welcome};
export {Multiple};
