# Input

קומפוננטת קלט טקסט מתקדמת עם תמיכה בתוויות, שגיאות ואייקונים.

## התקנה
```bash
npm install @your-library/ui
```

## שימוש בסיסי
```tsx
import { Input } from '@your-library/ui'

function Example() {
  return (
    <Input
      label="שם מלא"
      placeholder="הכנס שם מלא"
      required
    />
  )
}
```

## וריאציות

### עם שגיאה
```tsx
<Input
  label="אימייל"
  type="email"
  error="נא להזין כתובת אימייל תקינה"
/>
```

### עם אייקונים
```tsx
<Input
  startIcon={<SearchIcon />}
  placeholder="חיפוש..."
/>

<Input
  endIcon={<EyeIcon />}
  type="password"
  placeholder="סיסמה"
/>
```

### גדלים שונים
```tsx
<Input size="small" placeholder="קטן" />
<Input size="medium" placeholder="בינוני" />
<Input size="large" placeholder="גדול" />
```

## Props

| שם | סוג | ברירת מחדל | תיאור |
|---|---|---|---|
| label | `string` | - | תווית השדה |
| error | `string` | - | הודעת שגיאה |
| required | `boolean` | `false` | האם השדה חובה |
| size | `'small' \| 'medium' \| 'large'` | `'medium'` | גודל השדה |
| startIcon | `ReactNode` | - | אייקון בתחילת השדה |
| endIcon | `ReactNode` | - | אייקון בסוף השדה |
| disabled | `boolean` | `false` | האם השדה מושבת |

בנוסף, הקומפוננטה תומכת בכל ה-props של `HTMLInputElement`.

## נגישות
- תמיכה מלאה ב-ARIA labels
- חיבור אוטומטי בין תווית לשדה
- תמיכה בניווט מקלדת
- הודעות שגיאה נגישות לקוראי מסך

## דוגמאות נוספות

### טופס התחברות
```tsx
function LoginForm() {
  return (
    <form>
      <Input
        label="אימייל"
        type="email"
        required
        startIcon={<EmailIcon />}
      />
      <Input
        label="סיסמה"
        type="password"
        required
        endIcon={<EyeIcon />}
      />
      <Button type="submit">התחברות</Button>
    </form>
  )
}
```

### שדה חיפוש
```tsx
function SearchField() {
  return (
    <Input
      startIcon={<SearchIcon />}
      endIcon={<CloseIcon />}
      placeholder="חיפוש..."
      size="large"
    />
  )
}
```

## שאלות נפוצות

### איך לשלב עם ולידציה?
```tsx
function ValidatedInput() {
  const [error, setError] = useState('')

  const validate = (value: string) => {
    if (!value) {
      setError('שדה חובה')
    } else {
      setError('')
    }
  }

  return (
    <Input
      label="שם משתמש"
      error={error}
      onChange={(e) => validate(e.target.value)}
    />
  )
}
```

### איך להוסיף סגנון מותאם אישית?
```tsx
<Input
  className="custom-input"
  style={{ maxWidth: '300px' }}
/>
```

## רישיון
MIT 