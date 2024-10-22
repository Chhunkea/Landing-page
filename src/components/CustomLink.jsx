import { Link } from "react-router-dom";
import React from 'react';

function CustomLink({children, to}) {
  return (
    <Link to={to} style={ {textDecoration : 'none'}}>
        {children}
    </Link>
  );
};

export default CustomLink;
