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

export const Middle: Story = {
  args: {
    InpuType: "email",
    placeholder: "Nome de usuário ou e-mail",
  },
};

