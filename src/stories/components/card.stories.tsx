import type { StoryObj, Meta } from "@storybook/react";

import Card from "../../components/cards/card";

export default {
  component: Card,
  title: "Components/Card/Default",

  parameters: {
    layout: "centered",
  },
} as Meta;

type Story = StoryObj<typeof Card>;

export const CardStorie: Story = {
  args: {
    task: "Leitura",
    title: "O Milagre da manhã",
    time: "30 min durante 15 dias",
  },
};
