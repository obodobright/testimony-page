import React from "react";
import "./App.css";
//import Navbar from "./github-finder/navbar";
//import UserItem from "./github-finder/userItem";
//import Login from './advanced-react/login';
//import EffectHooks from './advanced-react/useEffectHook';
//  import Shop from './advanced-react/shopping';
// import User from './advanced-react/useStateObbject';
//import Fetch from './advanced-react/fetchData'
// import New from './component/new';
// import TweetList from './twitter/tweetList';
// import BookList from './bookList/bookList';
// import UseStateError from './advanced-react/useStateError';
// import People from './advanced-react/people';

//import  Component from './GF/component'

import Pages from './firstproject/pages'
// import Time from "./clock/time";

function App() {
  
  return (
    <React.Fragment className="App">
      {/* style={{ width: "50%", margin: "auto" }} */}
      {/* <div>
        <Navbar />
        <div>
          <UserItem />
        </div>
      </div> */}
      <Pages />
      {/* <Pages /> */}
      {/* <Component /> */}
    </React.Fragment>
  );
}

export default App;
