import { Link } from 'react-router-dom'
import { features } from '../../data/features'
import styles from './FeatureListPage.module.scss'

const FeatureListPage = () => {
  return (
    <div className={styles.container}>
      <h1>קומפוננטות</h1>
      <div className={styles.grid}>
        {features.map((feature) => (
          <Link 
            key={feature.id} 
            to={`/features/${feature.id}`}
            className={styles.card}
          >
            <h2>{feature.name}</h2>
            <p>{feature.description}</p>
            <div className={styles.meta}>
              <span>גרסה: {feature.version}</span>
              <span>עודכן: {new Date(feature.lastUpdated).toLocaleDateString('he-IL')}</span>
              <span>יוצר: {feature.author}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default FeatureListPage