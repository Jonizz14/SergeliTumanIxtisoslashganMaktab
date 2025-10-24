import React from 'react'
import Header from "../Header/header";
import Footer from "../Footer/footer";
function layout({children}) {
  return (
    <>
    <Header/>
    {children}
    <Footer/>
    </>
  )
}

export default layout