# Button

קומפוננטת כפתור בסיסית עם תמיכה במספר וריאנטים וגדלים.

## התקנה
```bash
npm install @your-library/ui
```

## שימוש בסיסי
```tsx
import { Button } from '@your-library/ui'

function Example() {
  return (
    <Button variant="primary" onClick={() => alert('נלחץ!')}>
      לחץ כאן
    </Button>
  )
}
```

## וריאנטים
הקומפוננטה תומכת בשלושה וריאנטים:
```tsx
<Button variant="primary">כפתור ראשי</Button>
<Button variant="secondary">כפתור משני</Button>
<Button variant="outline">כפתור מתאר</Button>
```

## גדלים
ניתן לבחור בין שלושה גדלים:
```tsx
<Button size="small">כפתור קטן</Button>
<Button size="medium">כפתור בינוני</Button>
<Button size="large">כפתור גדול</Button>
```

## מצבים

### מושבת
```tsx
<Button disabled>כפתור מושבת</Button>
```

### עם אייקון
```tsx
<Button>
  <Icon name="heart" />
  <span>אהבתי</span>
</Button>
```

## Props

| שם | סוג | ברירת מחדל | תיאור |
|---|---|---|---|
| variant | `'primary' \| 'secondary' \| 'outline'` | `'primary'` | סגנון הכפתור |
| size | `'small' \| 'medium' \| 'large'` | `'medium'` | גודל הכפתור |
| disabled | `boolean` | `false` | האם הכפתור מושבת |
| children | `ReactNode` | חובה | תוכן הכפתור |
| className | `string` | - | קלאס נוסף לעיצוב |
| onClick | `(event: MouseEvent) => void` | - | פונקציה שתופעל בלחיצה |

## נגישות
- הקומפוננטה תומכת ב-ARIA attributes
- ניתן לנווט באמצעות המקלדת
- תומך ב-screen readers

## דוגמאות נוספות

### טופס הרשמה
```tsx
function SignupForm() {
  return (
    <form>
      <Input placeholder="אימייל" />
      <Input type="password" placeholder="סיסמה" />
      <Button variant="primary" type="submit">
        הרשמה
      </Button>
    </form>
  )
}
```

### קבוצת כפתורים
```tsx
function ButtonGroup() {
  return (
    <div>
      <Button variant="outline">ביטול</Button>
      <Button variant="primary">שמירה</Button>
    </div>
  )
}
```

## שאלות נפוצות

### איך אני מוסיף סגנון מותאם אישית?
ניתן להעביר className או style props:
```tsx
<Button className="my-custom-button" style={{ margin: '1rem' }}>
  כפתור מותאם
</Button>
```

### האם אפשר להשתמש כקישור?
כן, אבל מומלץ להשתמש בקומפוננטת `Link` במקום:
```tsx
<Link to="/about" variant="button">
  אודות
</Link>
```

## תרומה לפרויקט
מוזמנים לתרום לפרויקט ב-GitHub:
1. Fork הרפוזיטורי
2. צרו branch חדש
3. הוסיפו את השינויים שלכם
4. צרו Pull Request

## רישיון
MIT
