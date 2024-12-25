import { features } from '../../data/features'
import NavGroup from '../../components/NavGroup/NavGroup'
import styles from './Sidebar.module.scss'

interface SidebarProps {
  isOpen: boolean
}

const Sidebar = ({ isOpen }: SidebarProps) => {
  return (
    isOpen && (
      <aside className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
        <nav>
          <NavGroup
            title="קומפוננטות"
            baseUrl="features"
            items={features}
          />
          {/* אפשר להוסיף עוד קבוצות ניווט כאן */}
        </nav>
      </aside>
    )
  )
}

export default Sidebar 