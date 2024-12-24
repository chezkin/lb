export interface Feature {
  id: string
  name: string
  description: string
  params?: {
    name: string
    type: string
    defaultValue: string
    description: string
  }[]
}

export const features: Feature[] = [
  {
    id: 'button',
    name: 'כפתור',
    description: 'קומפוננטת כפתור בסיסית עם מספר וריאציות',
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