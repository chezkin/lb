import { useParams } from 'react-router-dom'
import { features } from '../data/features'
import styles from './FeaturePage.module.scss'

const FeaturePage = () => {
  const { featureId } = useParams()
  const feature = features.find(f => f.id === featureId)

  if (!feature) {
    return <div>קומפוננטה לא נמצאה</div>
  }

  return (
    <div className={styles.container}>
      <h1>{feature.name}</h1>
      <p className={styles.description}>{feature.description}</p>
      
      <section className={styles.section}>
        <h2>דוגמה חיה</h2>
        <div className={styles.demo}>
          {/* כאן תוצג הדוגמה החיה של הקומפוננטה */}
        </div>
      </section>

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
            {feature.params?.map(param => (
              <tr key={param.name}>
                <td>{param.name}</td>
                <td>{param.type}</td>
                <td>{param.defaultValue}</td>
                <td>{param.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  )
}

export default FeaturePage 