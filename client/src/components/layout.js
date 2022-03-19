import React from 'react';
import Header from './header';


/** Renders the Layout
 * 
 *  Children will be rendered between the header and the footer
 * 
 *  @example
 *  <Layout>
 *      <div>Contents</div>
 *  </Layout>
 */
const Layout = ({children}) => {
    return(
        <div>
            <Header></Header>
            <main className="layoutChildren">{children}</main>
        </div>
    )
}

export default Layout