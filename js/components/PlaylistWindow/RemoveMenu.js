import React from "react";
import { connect } from "react-redux";
import { REMOVE_ALL_TRACKS } from "../../actionTypes";
import { cropPlaylist, removeSelectedTracks } from "../../actionCreators";
import PlaylistMenu from "./PlaylistMenu";

const RemoveMenu = props => (
  <PlaylistMenu id="playlist-remove-menu">
    <li className="remove-misc" />
    <li className="remove-all" onClick={props.removeAll} />
    <li className="crop" onClick={props.crop} />
    <li className="remove-selected" onClick={props.removeSelected} />
  </PlaylistMenu>
);

const mapDispatchToProps = {
  removeSelected: removeSelectedTracks,
  removeAll: () => ({ type: REMOVE_ALL_TRACKS }),
  crop: cropPlaylist
};
export default connect(null, mapDispatchToProps)(RemoveMenu);
