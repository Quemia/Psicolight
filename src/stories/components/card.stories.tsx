import type { StoryObj, Meta } from "@storybook/react";

import Card from "../../components/cards/card";

export default {
  component: Card,
  title: "Components/Button/Default",

  parameters: {
    layout: "centered",
  },
} as Meta;

type Story = StoryObj<typeof Card>;

export const CardStorie: Story = {
  args: {
    task: "Leitura",
    title: "O Milagre do Amanhã",
    time: "30 min durante 15 dias",
  },
};
