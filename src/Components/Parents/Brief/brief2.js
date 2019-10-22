import React from "react";
import DescContainer from "../../Home/Short";

const Img = () => (
  <img 
    className="img img-fluid" 
    src='https://www.w3schools.com/w3images/tablesetting.jpg' 
    alt='abt'/>
);
const Desc = () => (
  <>
    <DescContainer.Title title={"Parents"} />
    <div>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </div>
  </>
);

const Brief = () => (
  <DescContainer 
    title="Parents"
    left={<Desc />}
    right={<Img />} />
);

export default Brief;
