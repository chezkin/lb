import { ButtonHTMLAttributes, ReactNode } from 'react'
import styles from './Button.module.scss'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** וריאנט הכפתור */
  variant?: 'primary' | 'secondary' | 'outline'
  /** גודל הכפתור */
  size?: 'small' | 'medium' | 'large'
  /** תוכן הכפתור */
  children: ReactNode
}

/**
 * קומפוננטת כפתור בסיסית
 * @example
 * ```tsx
 * <Button variant="primary" size="medium" onClick={() => console.log('clicked')}>
 *   לחץ כאן
 * </Button>
 * ```
 */
const Button = ({ 
  variant = 'primary',
  size = 'medium',
  children,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${styles[size]} ${className || ''}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button 