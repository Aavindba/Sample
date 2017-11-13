import React from 'react';

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Aravind',
  lastName: 'Boilla'
};

const GetGreeting = function () {
     if (user) {
       return <h1>Hello, {formatName(user)}!</h1>;
      //return <h1>Hello!</h1>;
      
    }
    return <h1>Hello, Stranger.</h1>;
  }

export default GetGreeting;


// <Welcome name='ajay' />
// <Welcome handleFun = {} />

// <GetGreeting />

// { }

