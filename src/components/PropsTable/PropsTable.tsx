import { FeatureParam } from '../../data/features'
import styles from './PropsTable.module.scss'

interface PropsTableProps {
  params: FeatureParam[]
}

const PropsTable = ({ params }: PropsTableProps) => {
  if (!params || params.length === 0) return null

  return (
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
        {params.map(param => (
          <tr key={param.name}>
            <td>{param.name}</td>
            <td><code>{param.type}</code></td>
            <td><code>{param.defaultValue}</code></td>
            <td>{param.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default PropsTable 