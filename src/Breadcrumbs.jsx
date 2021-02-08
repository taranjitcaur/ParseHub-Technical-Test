import React from 'react';
import {Breadcrumbs as MUIBreadcrumbs, Link} from '@material-ui/core';
import {withRouter} from "react-router-dom"
const Breadcrumbs = props => {
  const {history, location : {pathname}} = props;
  const pathnames = pathname.split('/').filter(x => x)
  return (
    <MUIBreadcrumbs aria-label="breadcrumb">
      <Link onClick = {() => history.push("/")}>Home</Link>
      {pathnames.map((name, index) => {
       // console.log(pathnames)
                const routeTo = `/${pathnames.slice(0, index+1).join("/")}`
             return <Link onClick = {() => history.push(routeTo)} key={index}>{name}</Link>

      })}
     </MUIBreadcrumbs>
  );
}
export default withRouter(Breadcrumbs)