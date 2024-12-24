import { Link } from 'react-router-dom'
import { features } from '../../data/features'
import styles from './Sidebar.module.scss'

interface SidebarProps {
  isOpen: boolean
}

const Sidebar = ({ isOpen }: SidebarProps) => {
  return (
    isOpen &&
    <aside className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
      <nav>
        {features.map(feature => (
          <Link key={feature.id} to={`/features/${feature.id}`}>
            {feature.name}
          </Link>
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar 