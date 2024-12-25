# Select

קומפוננטת בחירה מרשימה עם תמיכה בתוויות, שגיאות וגדלים שונים.

## התקנה
```bash
npm install @your-library/ui
```

## שימוש בסיסי
```tsx
import { Select } from '@your-library/ui'

function Example() {
  const options = [
    { value: 'option1', label: 'אפשרות 1' },
    { value: 'option2', label: 'אפשרות 2' },
    { value: 'option3', label: 'אפשרות 3' },
  ]

  return (
    <Select
      label="בחר אפשרות"
      options={options}
      placeholder="בחר..."
    />
  )
}
```

## וריאציות

### עם שגיאה
```tsx
<Select
  label="קטגוריה"
  options={categories}
  error="נא לבחור קטגוריה"
/>
```

### גדלים שונים
```tsx
<Select size="small" options={options} />
<Select size="medium" options={options} />
<Select size="large" options={options} />
```

## Props

| שם | סוג | ברירת מחדל | תיאור |
|---|---|---|---|
| label | `string` | - | תווית השדה |
| options | `SelectOption[]` | חובה | אפשרויות הבחירה |
| error | `string` | - | הודעת שגיאה |
| required | `boolean` | `false` | האם השדה חובה |
| size | `'small' \| 'medium' \| 'large'` | `'medium'` | גודל השדה |
| placeholder | `string` | - | טקסט ברירת מחדל |
| disabled | `boolean` | `false` | האם השדה מושבת |

## טיפוס SelectOption
```typescript
interface SelectOption {
  value: string
  label: string
}
```

## נגישות
- תמיכה מלאה ב-ARIA labels
- חיבור אוטומטי בין תווית לשדה
- תמיכה בניווט מקלדת
- הודעות שגיאה נגישות לקוראי מסך

## דוגמאות נוספות

### טופס הרשמה
```tsx
function RegistrationForm() {
  const countries = [
    { value: 'IL', label: 'ישראל' },
    { value: 'US', label: 'ארה"ב' },
    { value: 'UK', label: 'בריטניה' },
  ]

  return (
    <form>
      <Input label="שם מלא" required />
      <Select
        label="מדינה"
        options={countries}
        required
        placeholder="בחר מדינה"
      />
      <Button type="submit">הרשמה</Button>
    </form>
  )
}
```

### שימוש עם מצב
```tsx
function ControlledSelect() {
  const [value, setValue] = useState('')

  return (
    <Select
      value={value}
      onChange={(e) => setValue(e.target.value)}
      options={options}
      placeholder="בחר..."
    />
  )
}
```

## שאלות נפוצות

### איך להוסיף סגנון מותאם אישית?
```tsx
<Select
  className="custom-select"
  style={{ maxWidth: '300px' }}
  options={options}
/>
```

### איך לטפל בשינוי ערך?
```tsx
<Select
  options={options}
  onChange={(e) => console.log('ערך נבחר:', e.target.value)}
/>
```

## רישיון
MIT 