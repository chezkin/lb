import { useParams } from 'react-router-dom'
import { features } from '../../data/features'
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
          <table className={styles.table}>
            <thead>
              <tr>
                <th>שם</th>
                <th>סוג</th>
                <th>ברירת מחדל</th>
                <th>תיאור</th>
              </tr>
            </thead>
            <tbody>
              {feature.params.map(param => (
                <tr key={param.name}>
                  <td>{param.name}</td>
                  <td><code>{param.type}</code></td>
                  <td><code>{param.defaultValue}</code></td>
                  <td>{param.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      )}
    </div>
  )
}

export default FeaturePage