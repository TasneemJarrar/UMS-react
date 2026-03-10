import React from 'react'
import Navbar from '../components/navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer/footer'

export default function MainLayout() {
  return (
    <>
    <Navbar />
    <Outlet />
    <Footer />

    </>
  )
}
