import type { Meta, StoryObj } from '@storybook/react';
import { ProfileFrame } from './ProfileFrame';

const meta = {
  title: 'Components/ProfileFrame',
  component: ProfileFrame,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    url: {
      control: 'text',
      description: 'URL của trang web profile',
    },
    height: {
      control: 'text',
      description: 'Chiều cao của frame',
    },
    width: {
      control: 'text',
      description: 'Chiều rộng của frame',
    },
    showLoader: {
      control: 'boolean',
      description: 'Hiển thị loading spinner',
    },
    loadingMessage: {
      control: 'text',
      description: 'Thông báo loading',
    },
    spinnerColor: {
      control: 'color',
      description: 'Màu spinner',
    },
    loaderBgColor: {
      control: 'color',
      description: 'Màu nền loading',
    },
  },
} satisfies Meta<typeof ProfileFrame>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const CustomHeight: Story = {
  args: {
    height: '600px',
  },
};

export const CustomLoading: Story = {
  args: {
    loadingMessage: 'Đang tải profile của Tuan...',
    spinnerColor: '#007bff',
    loaderBgColor: '#f8f9fa',
  },
};

export const NoLoader: Story = {
  args: {
    showLoader: false,
  },
};

export const CustomURL: Story = {
  args: {
    url: 'https://example.com',
    loadingMessage: 'Loading external site...',
  },
};
