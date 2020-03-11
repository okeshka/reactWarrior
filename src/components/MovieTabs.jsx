import React from "react";

const MovieTabs = () => {
    
    return (
        <div>
            <ul className="tabs nav nav-pills">
  <li className="nav-item">
    <div className="nav-link active">
      Popularity desc
    </div>
  </li>
  <li className="nav-item">
    <div className="nav-link">
      Revenue desc
    </div>
  </li>
  <li className="nav-item">
    <div className="nav-link">
      Void average desc
    </div>
  </li>
</ul>
        </div>
    )
}

export default MovieTabs;