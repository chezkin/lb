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
          </Link>
        ))}
      </div>
    </div>
  )
}

export default FeatureListPage 