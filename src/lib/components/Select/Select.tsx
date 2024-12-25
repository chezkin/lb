import { SelectHTMLAttributes, forwardRef } from 'react'
import styles from './Select.module.scss'

export interface SelectOption {
  value: string
  label: string
}

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  /** תווית השדה */
  label?: string
  /** האם השדה חובה */
  required?: boolean
  /** הודעת שגיאה */
  error?: string
  /** אפשרויות הבחירה */
  options: SelectOption[]
  /** גודל השדה */
  size?: 'small' | 'medium' | 'large'
  /** טקסט ברירת מחדל */
  placeholder?: string
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, required, error, options, size = 'medium', placeholder, className, ...props }, ref) => {
    return (
      <div className={styles.wrapper}>
        {label && (
          <label className={styles.label}>
            {label}
            {required && <span className={styles.required}>*</span>}
          </label>
        )}
        <select
          ref={ref}
          className={`${styles.select} ${styles[size]} ${error ? styles.error : ''} ${className || ''}`}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {error && <span className={styles.errorMessage}>{error}</span>}
      </div>
    )
  }
)

Select.displayName = 'Select'

export default Select 