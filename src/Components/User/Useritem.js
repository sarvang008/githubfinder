import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Useritem = (props) => {
  const { avatar_url, login } = props.user;
  return (
    <div className="card">
      <img
        src={avatar_url}
        alt="avatar"
        style={{ width: "50px", borderRadius: "50%" }}
      />
      <h3>{login}</h3>
      <div>
        <Link className="moreinfo" to={`/user/${login}`}>
          More
        </Link>
      </div>
    </div>
  );
};

Useritem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default Useritem;
