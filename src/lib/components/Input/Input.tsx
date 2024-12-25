import { InputHTMLAttributes, forwardRef } from 'react'
import styles from './Input.module.scss'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  /** תווית השדה */
  label?: string
  /** הודעת שגיאה */
  error?: string
  /** האם השדה חובה */
  required?: boolean
  /** גודל השדה */
  fieldSize?: 'small' | 'medium' | 'large'
  /** האם להציג אייקון */
  startIcon?: React.ReactNode
  /** האם להציג אייקון בצד שמאל */
  endIcon?: React.ReactNode
}

/**
 * קומפוננטת קלט בסיסית
 */
const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, required, fieldSize = 'medium', startIcon, endIcon, className, ...props }, ref) => {
    return (
      <div className={styles.wrapper}>
        {label && (
          <label className={styles.label}>
            {label}
            {required && <span className={styles.required}>*</span>}
          </label>
        )}
        <div className={styles.inputWrapper}>
          {startIcon && <span className={styles.startIcon}>{startIcon}</span>}
          <input
            ref={ref}
            className={`${styles.input} ${styles[fieldSize]} ${error ? styles.error : ''} 
              ${startIcon ? styles.hasStartIcon : ''} 
              ${endIcon ? styles.hasEndIcon : ''} 
              ${className || ''}`}
            {...props}
          />
          {endIcon && <span className={styles.endIcon}>{endIcon}</span>}
        </div>
        {error && <span className={styles.errorMessage}>{error}</span>}
      </div>
    )
  }
)

Input.displayName = 'Input'

export default Input 