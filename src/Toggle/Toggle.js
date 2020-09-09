import React from "react";
import { Button } from "antd";
import { connect } from "react-redux";

import { bindActionCreators } from "redux";

import { getMovies } from "../Movies/Actions";
import { togglemessage } from "../Toggle/Actions";



const Toggle = ({messageVisiblity,togglemessageprop,getMoviesprop}) => {

  return (
    <div>

        {
            messageVisiblity&&<p>Redux Toggle me setup</p>
        }
      <Button onClick={togglemessageprop} >Toggle Me</Button>
      <Button onClick={getMoviesprop} >getMovies</Button>
    </div>
  );
};  
const mapStateToProps = (state, ownProps) => {
  return {
    messageVisiblity: state.ToggleReducer.messageVisiblity,
  };
};

const mapDispatchToProps = (dispatch) =>bindActionCreators({
    togglemessageprop:togglemessage,
    getMoviesprop:getMovies
},dispatch)


export default connect(mapStateToProps,mapDispatchToProps)(Toggle);
