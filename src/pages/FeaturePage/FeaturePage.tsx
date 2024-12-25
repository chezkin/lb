import { useParams } from 'react-router-dom'
import { features } from '../../data/features'
import PropsTable from '../../components/PropsTable/PropsTable'
import styles from './FeaturePage.module.scss'

const FeaturePage = () => {
  const { featureId } = useParams()
  const feature = features.find(f => f.id === featureId)

  if (!feature) {
    return <div>הקומפוננטה לא נמצאה</div>
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>{feature.name}</h1>
        <div className={styles.meta}>
          <div className={styles.metaItem}>
            <span>גרסה:</span>
            <strong>{feature.version}</strong>
          </div>
          <div className={styles.metaItem}>
            <span>עודכן:</span>
            <strong>{new Date(feature.lastUpdated).toLocaleDateString('he-IL')}</strong>
          </div>
          <div className={styles.metaItem}>
            <span>יוצר:</span>
            <strong>{feature.author}</strong>
          </div>
        </div>
      </header>

      <p className={styles.description}>{feature.description}</p>

      <section className={styles.section}>
        <h2>דוגמה חיה</h2>
        <div className={styles.demo}>
          {/* כאן תוצג הדוגמה החיה של הקומפוננטה */}
        </div>
      </section>

      {feature.params && feature.params.length > 0 && (
        <section className={styles.section}>
          <h2>פרמטרים</h2>
          <PropsTable params={feature.params} />
        </section>
      )}
    </div>
  )
}

export default FeaturePage