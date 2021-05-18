import React, { createContext, useEffect, setState, Component } from "react";
// import {fakeUser as user} from "../components/FakeDBUser";
import API from "../utils/API";

export const UserContext = createContext({
  user: {},
  search: "",
});

class UserContextProvider extends React.Component {
  state = {
    user: {},
    search: "",
  };

  // getUser = async (email) => {
  //   // event.preventDefault();
  //   const user = await API.getEmail(email);
  //   this.state(user.data[0]);
  //   console.log("signup: heres the user ", user.data[0]);
  // };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.search !== this.state.search) {
      console.log("componentDidUpdate fired off")
      // const userTemp = API.getEmail(this.state.search);
      // this.setState ({user: API.getEmail(this.state.search)});
      API.getEmail(this.state.search)
      .then((res)=> {
        console.log("UserContext: this is the .then return",res.data[0])
      })
      .then((res) => {
        this.setState({user: res.data[0]})
      })

    }
  }

  // setUser = (email) => {
  //   const userTemp = API.getEmail(email);
  //   this.setState ({user: userTemp});
  // }

  setSearch = (email) => {
    this.setState({ search: email });
  };

  // setUser = (userObj) => {
  //   this.setState({ user: userObj });
  // };

  render() {
    return (
      <UserContext.Provider value={{ ...this.state, setSearch: this.setSearch }}>
        {this.props.children}
      </UserContext.Provider>
    );
    // end return
  }
  // end render
}
// end class

export default UserContextProvider;
