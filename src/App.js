
import React from 'react';
import User from './pages/user';
import { connect } from 'react-redux';

function App(props) {
  return (
    <div>
      <User username={props.user.name} />
      <button onClick={() => props.setName("Redux Tutorial")}>Change Name</button>
    </div>
  );
}

const mapStatetoProps = (state) => {
  return {
    user: state.user,
    employee: state.emp
  };
};

const mapDispatchtoProps = (disatch) => {
  return {
    setName: (name) => {
      disatch({
        type: "setName",
        payload: name

      })
    }
  };
}

export default connect(mapStatetoProps, mapDispatchtoProps)(App);
