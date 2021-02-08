import React from "react"
import Tree from "../components/Tree/Tree"
import {treeData} from  "../TreeStructure.js"
const Home = (props) => {
    const {location : {pathname}} = props;
      const cf = treeData.filter(x => x.component === pathname).length

      let dta = '';
      if(pathname === '/') {
        dta = treeData
      } else if(cf !== 0 ) {
        dta = cf
      } else {
        const cf1 = treeData[0].children.filter(y => y.component === pathname)
        dta = cf1
      }
    return(
        <div className="text-center">
          <h2>File Structure</h2>
          <div className="mt-3">
            <div className="row mt-3 d-flex">
              <div className="col-lg-12 text-center text-dark">
                <Tree data={dta}/>
              </div>
            </div>
          </div>
        </div>
    )
}
export default Home;