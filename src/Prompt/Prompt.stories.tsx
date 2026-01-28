import type { Meta, StoryObj } from '@storybook/react';
import { Prompt } from './Prompt';

const meta = {
  title: 'Components/Prompt',
  component: Prompt,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['info', 'success', 'warning', 'error'],
      description: 'Kiểu prompt',
    },
    closable: {
      control: 'boolean',
      description: 'Có thể đóng được không',
    },
  },
} satisfies Meta<typeof Prompt>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Info: Story = {
  args: {
    type: 'info',
    title: 'Thông tin',
    message: 'Đây là một thông báo thông tin quan trọng.',
    closable: true,
  },
};

export const Success: Story = {
  args: {
    type: 'success',
    title: 'Thành công!',
    message: 'Thao tác của bạn đã được thực hiện thành công.',
    closable: true,
  },
};

export const Warning: Story = {
  args: {
    type: 'warning',
    title: 'Cảnh báo',
    message: 'Bạn cần kiểm tra lại thông tin trước khi tiếp tục.',
    closable: true,
  },
};

export const Error: Story = {
  args: {
    type: 'error',
    title: 'Lỗi',
    message: 'Đã xảy ra lỗi trong quá trình xử lý. Vui lòng thử lại.',
    closable: true,
  },
};

export const NotClosable: Story = {
  args: {
    type: 'info',
    title: 'Không thể đóng',
    message: 'Prompt này không có nút đóng.',
    closable: false,
  },
};
