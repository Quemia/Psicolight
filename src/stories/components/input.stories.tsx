import type { StoryObj, Meta } from "@storybook/react";

import Input from "../../components/input/Input";

export default {
  component: Input,
  title: "Components/Input/Default",

  parameters: {
    layout: "centered",
  },
} as Meta;

type Story = StoryObj<typeof Input>;

export const EmailInput: Story = {
  args: {
    InpuType: "email",
  },
};

export const PasswordInput: Story = {
  args: {
    InpuType: "password",
  },
};
