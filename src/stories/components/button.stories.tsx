import type { StoryObj, Meta } from "@storybook/react";

import Button from "../../components/button/Button";

export default {
  component: Button,
  title: "Components/Button/Default",

  parameters: {
    layout: "centered",
  },
} as Meta;

type Story = StoryObj<typeof Button>;

export const Middle: Story = {
  args: {
    size: "middle",
    text: "Começar! >",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    text: ">",
  },
};

export const Largue: Story = {
  args: {
    size: "largue",
    text: "Vamos lá!",
  },
};

export const LargueT: Story = {
  args: {
    size: "largueTransparent",
    text: "Entrar com o Facebook",
  },
};

export const MiddleT: Story = {
  args: {
    size: "middleTransparent",
    text: "Pular",
  },
};

export const SmallT: Story = {
  args: {
    size: "smallTransparent",
    text: "Cadastre-se",
  },
};
