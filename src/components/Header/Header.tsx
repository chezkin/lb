import styles from './Header.module.scss'

interface HeaderProps {
  onMenuClick: () => void
}

const Header = ({ onMenuClick }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <button onClick={onMenuClick} className={styles.menuButton}>
        ☰
      </button>
      <h1>ספריית קומפוננטות</h1>
    </header>
  )
}

export default Header 