export interface FeatureParam {
  name: string
  type: string
  defaultValue: string
  description: string
}

export interface Feature {
  id: string
  name: string
  description: string
  author: string
  version: string
  lastUpdated: string
  params?: FeatureParam[]
}

export const features: Feature[] = [
  {
    id: 'button',
    name: 'כפתור',
    description: 'קומפוננטת כפתור בסיסית עם מספר וריאציות',
    author: 'ישראל ישראלי',
    version: '1.0.0',
    lastUpdated: '2024-03-15',
    params: [
      {
        name: 'variant',
        type: "'primary' | 'secondary' | 'outline'",
        defaultValue: 'primary',
        description: 'סגנון הכפתור'
      },
      {
        name: 'size',
        type: "'small' | 'medium' | 'large'",
        defaultValue: 'medium',
        description: 'גודל הכפתור'
      }
    ]
  },
  {
    id: 'input',
    name: 'שדה קלט',
    description: 'קומפוננטת קלט טקסט עם תמיכה בוולידציה',
    author: 'יעקב יעקובי',
    version: '1.1.0',
    lastUpdated: '2024-03-14',
    params: [
      {
        name: 'type',
        type: "'text' | 'password' | 'email'",
        defaultValue: 'text',
        description: 'סוג שדה הקלט'
      }
    ]
  }
] 