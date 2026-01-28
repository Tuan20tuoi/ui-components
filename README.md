# @tuan17tui/ui-components

[![npm version](https://img.shields.io/npm/v/@tuan17tui/ui-components.svg)](https://www.npmjs.com/package/@tuan17tui/ui-components)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Thư viện UI Components cho React, được build bằng TypeScript và tsup.

## 🚀 Cài đặt

```bash
npm install @tuan17tui/ui-components
```

hoặc

```bash
yarn add @tuan17tui/ui-components
```

## 📦 Sử dụng

### Import Components

```tsx
import { Button, Prompt } from '@tuan17tui/ui-components';

function App() {
  return (
    <div>
      <Button variant="primary" size="medium">
        Click me
      </Button>
      
      <Prompt 
        type="success" 
        title="Thành công!"
        message="Thao tác đã được thực hiện thành công."
      />
    </div>
  );
}
```

## 🎨 Components

### Button

Component button với nhiều variants và sizes.

**Props:**
- `variant`: `'primary' | 'secondary' | 'outline'` (default: `'primary'`)
- `size`: `'small' | 'medium' | 'large'` (default: `'medium'`)
- `loading`: `boolean` (default: `false`)
- Kế thừa tất cả props của HTML button element

**Ví dụ:**

```tsx
<Button variant="primary" size="large" onClick={() => alert('Clicked!')}>
  Primary Button
</Button>

<Button variant="outline" size="small" loading>
  Loading...
</Button>
```

### Prompt

Component hiển thị thông báo với các loại khác nhau.

**Props:**
- `title`: `string` (required) - Tiêu đề prompt
- `message`: `string` (required) - Nội dung thông báo
- `type`: `'info' | 'success' | 'warning' | 'error'` (default: `'info'`)
- `closable`: `boolean` (default: `true`)
- `onClose`: `() => void` - Callback khi đóng
- Kế thừa tất cả props của HTML div element

**Ví dụ:**

```tsx
<Prompt
  type="error"
  title="Lỗi"
  message="Đã xảy ra lỗi trong quá trình xử lý."
  onClose={() => console.log('Prompt closed')}
/>
```

## 🛠️ Development

### Build

```bash
npm run build
```

### Watch mode

```bash
npm run dev
```

## 📄 License

MIT © tuan17tui
