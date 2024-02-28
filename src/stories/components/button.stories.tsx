import React from "react";
import type { StoryObj, Meta } from "@storybook/react";

import Button, { ButtonProps } from "../../components/button/Button";

const meta: Meta<typeof Button> = {
  component: Button,
};

export default {
  component: Button,
  title: "Components/Button/Default",
  argTypes: { onClick: { action: "cliked " } },
} as Meta;

type Story = StoryObj<typeof Button>;

export const Middle: Story = {
  args: {
    size: "middle",
    text: "Button",
  },
};
