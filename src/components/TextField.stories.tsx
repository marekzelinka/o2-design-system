import type { Meta } from "@storybook/react";
import { Form } from "react-aria-components";
import { TextField } from "./TextField";

export const Default = (args: any) => <TextField {...args} />;

export const WithDescription = (args: any) => (
  <TextField {...args} description="Your name" />
);

export const Required = (args: any) => <TextField {...args} isRequired />;

export const Disabled = (args: any) => <TextField {...args} isDisabled />;

export const Invalid = (args: any) => <TextField {...args} isInvalid />;

export const Validation = (args: any) => (
  <Form method="post">
    <TextField {...args} />
  </Form>
);
Validation.args = {
  isRequired: true,
};

const meta: Meta<typeof TextField> = {
  component: TextField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    label: "Name",
  },
};

export default meta;
