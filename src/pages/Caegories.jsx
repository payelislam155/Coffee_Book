/* eslint-disable react/prop-types */
import {NavLink } from "react-router-dom";

const Caegories = ({categories}) => {
  return (
    <div>
      <div role="tablist" className="tabs tabs-bordered">
        {categories.map((category) => (
          <NavLink
            key={category.category}
            to={`/category/${category.category}`}
            role="tab"
            className={({isActive}) => `tab text-2xl font-bold ${isActive ? 'tab-active' : "" }`}
          >
            {category.category}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Caegories;