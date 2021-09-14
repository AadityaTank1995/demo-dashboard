import React from 'react'
import DashboardHeader from './DashboardHeader'
import './Dashboard.scss'
import Cards from './Cards'

const Dashboard = () => {
  return (
    <main className="dashboard">
      <DashboardHeader/>
      <Cards/>
    </main>
  )
}

export default Dashboard
