import React, { useContext } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import MyContext from '../../Context/data/Mycontext'

function Layout({children}) {
   const context = useContext(MyContext)

   const {mode} = context

  return (
   <>
    <Navbar/>
     <div className='content' style={{
      backgroundColor: mode === 'dark' ? '#282c34' : '',
      color:mode === 'dark' ? 'white' : ''
     }}>
      {children}
     </div>
     <Footer/>
   
   </>
  )
}

export default Layout
