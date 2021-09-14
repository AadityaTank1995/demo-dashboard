import React, { useContext, useEffect } from 'react'
import { UserContext } from '../../context/UserContext';

const DashboardHeader = () => {
  const { state:user } = useContext(UserContext);
  useEffect(() => {
  }, [user])
  return (
    <header className="dashboard-header">
      <h1>{ user.loaded ? "Welcome " + user.user.name.first : "..." }</h1>
      { user.loaded 
          ? <img src={user.user.picture.thumbnail} alt="Profile"/> 
          : <i className="bi bi-person-circle"></i>
        }
    </header>
  )
}

export default DashboardHeader
