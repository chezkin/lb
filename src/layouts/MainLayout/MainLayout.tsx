import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/Header/Header'
import Sidebar from '../../components/Sidebar/Sidebar'
import styles from './MainLayout.module.scss'

const MainLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <div className={`${styles.layout} ${isSidebarOpen ? styles.sidebarOpen : ''}`}>
      <Header onMenuClick={toggleSidebar} />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Sidebar isOpen={isSidebarOpen} />
    </div>
  )
}

export default MainLayout 