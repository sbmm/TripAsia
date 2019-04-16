import React from 'react'

import Navbar from 'components/Navbar'

import 'fonts/fonts.scss'
import './Layout.scss'


const Layout = ({children}) => (
    <div className="content">
        <Navbar />
        {children}
    </div>
)

export default Layout