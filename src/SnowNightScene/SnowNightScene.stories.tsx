import type { Meta, StoryObj } from "@storybook/react";
import { SnowNightSceneApp } from "./index";
import { SnowScene } from "./SnowScene";

/**
 * SnowNightScene là một component tạo hiệu ứng tuyết rơi vào đêm với mặt trăng.
 * Component này bao gồm:
 * - SnowScene: Cảnh tuyết với hiệu ứng animation
 * - SnowSettings: Bảng điều khiển để tùy chỉnh tuyết rơi
 */
const meta: Meta<typeof SnowNightSceneApp> = {
  title: "Components/SnowNightScene",
  component: SnowNightSceneApp,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    initialDensity: {
      control: { type: 'range', min: 20, max: 200, step: 1 },
      description: 'Số lượng hạt tuyết',
    },
    initialWind: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Sức gió',
    },
    initialSize: {
      control: { type: 'range', min: 2, max: 10, step: 1 },
      description: 'Kích thước hạt tuyết',
    },
    showSettings: {
      control: 'boolean',
      description: 'Hiển thị bảng điều khiển',
    },
    bgColor: {
      control: 'color',
      description: 'Màu nền (nếu muốn dùng gradient tùy chỉnh hoàn toàn)',
    },
    bgColor1: {
      control: 'color',
      description: 'Màu gradient thứ 1 (ở trên)',
    },
    bgColor2: {
      control: 'color',
      description: 'Màu gradient thứ 2 (giữa)',
    },
    bgColor3: {
      control: 'color',
      description: 'Màu gradient thứ 3 (dưới)',
    },
    colorStop1: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Vị trí màu 1 (%)',
    },
    colorStop2: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Vị trí màu 2 (%)',
    },
    colorStop3: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Vị trí màu 3 (%)',
    },
  },
};

export default meta;
type Story = StoryObj<typeof SnowNightSceneApp>;

/**
 * Cảnh tuyết rơi hoàn chỉnh với bảng điều khiển
 */
export const Default: Story = {
  args: {
    initialDensity: 80,
    initialWind: 30,
    initialSize: 6,
    showSettings: true,
    bgColor1: '#2c3e50',
    bgColor2: '#1a2a3a',
    bgColor3: '#0b132b',
    colorStop1: 0,
    colorStop2: 50,
    colorStop3: 100,
  },
};

/**
 * Chỉ hiển thị cảnh tuyết với các thông số tùy chỉnh
 */
export const SnowSceneOnly: StoryObj<typeof SnowScene> = {
  render: () => <SnowScene density={80} wind={30} size={6} />,
  parameters: {
    docs: {
      description: {
        story: "Cảnh tuyết rơi mà không có bảng điều khiển",
      },
    },
  },
};

/**
 * Tuyết rơi nhiều với gió mạnh
 */
export const HeavySnowWithWind: StoryObj<typeof SnowScene> = {
  render: () => <SnowScene density={150} wind={60} size={8} />,
  parameters: {
    docs: {
      description: {
        story: "Tuyết rơi dày đặc với gió mạnh",
      },
    },
  },
};

/**
 * Tuyết rơi nhẹ không có gió
 */
export const LightSnow: StoryObj<typeof SnowScene> = {
  render: () => <SnowScene density={40} wind={0} size={4} />,
  parameters: {
    docs: {
      description: {
        story: "Tuyết rơi nhẹ nhàng, không có gió",
      },
    },
  },
};

/**
 * Bão tuyết
 */
export const Blizzard: StoryObj<typeof SnowScene> = {
  render: () => <SnowScene density={200} wind={100} size={10} />,
  parameters: {
    docs: {
      description: {
        story: "Bão tuyết với gió rất mạnh và tuyết dày đặc",
      },
    },
  },
};
