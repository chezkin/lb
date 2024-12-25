import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './NavGroup.module.scss'

interface NavItem {
  id: string
  name: string
}

interface NavGroupProps {
  title: string
  baseUrl: string
  items: NavItem[]
}

const NavGroup = ({ title, baseUrl, items }: NavGroupProps) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const location = useLocation()
  
  // בדיקה האם אנחנו נמצאים בתת-נתיב של הקבוצה הזו
  const isActiveGroup = location.pathname.startsWith(`/${baseUrl}`)
  const activeItemId = location.pathname.split('/').pop()

  // פתיחה אוטומטית של הקבוצה אם אנחנו בתוכה
  useEffect(() => {
    if (isActiveGroup) {
      setIsExpanded(true)
    }
  }, [isActiveGroup])

  return (
    <div className={styles.navGroup}>
      <div className={styles.header}>
        <Link 
          to={`/${baseUrl}`} 
          className={`${styles.title} ${isActiveGroup ? styles.active : ''}`}
        >
          {title}
        </Link>
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className={`${styles.expandButton} ${isExpanded ? styles.expanded : ''}`}
        >
          ▼
        </button>
      </div>
      {isExpanded && (
        <div className={styles.items}>
          {items.map(item => (
            <Link
              key={item.id}
              to={`/${baseUrl}/${item.id}`}
              className={`${styles.item} ${item.id === activeItemId ? styles.active : ''}`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default NavGroup 