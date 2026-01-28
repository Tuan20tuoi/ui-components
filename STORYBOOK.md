# @tuan17tui/ui-components - Storybook Documentation

Storybook đã được cấu hình cho UI Component Library này.

## 📖 Xem Storybook

### Chạy Development Mode

```bash
npm run storybook
```

Storybook sẽ mở tại: `http://localhost:6006`

### Build Storybook (Static)

```bash
npm run build-storybook
```

Output sẽ được tạo trong thư mục `storybook-static/`

## 🎨 Components có Storybook

- ✅ Button - Các variants và sizes khác nhau
- ✅ Prompt - Các loại thông báo (info, success, warning, error)
- ✅ ProfileFrame - Load iframe với tùy chỉnh

## 📝 Tạo Story mới

Tạo file `*.stories.tsx` trong thư mục component:

```tsx
import type { Meta, StoryObj } from '@storybook/react';
import { YourComponent } from './YourComponent';

const meta = {
  title: 'Components/YourComponent',
  component: YourComponent,
  tags: ['autodocs'],
} satisfies Meta<typeof YourComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // props here
  },
};
```

## 🔧 Addons đã cài

- **@chromatic-com/storybook** - Visual testing
- **@storybook/addon-a11y** - Accessibility testing
- **@storybook/addon-docs** - Auto-generated docs
- **@storybook/addon-vitest** - Unit testing integration
- **@storybook/addon-onboarding** - Onboarding guide

## 🚀 Deploy Storybook

Build static và deploy lên host bất kỳ (Vercel, Netlify, GitHub Pages):

```bash
npm run build-storybook
```

Sau đó upload thư mục `storybook-static/`
