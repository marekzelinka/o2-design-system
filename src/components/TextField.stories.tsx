import type { Meta } from "@storybook/react";
import { Form } from "react-aria-components";
import { TextField, type TextFieldProps } from "./TextField";

const meta = {
  component: TextField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    label: "Name",
  },
} satisfies Meta<typeof TextField>;

export default meta;

export const Default = (props: TextFieldProps) => <TextField {...props} />;

export const WithDescription = (props: TextFieldProps) => (
  <TextField {...props} description="Your name" />
);

export const Required = (props: TextFieldProps) => (
  <TextField {...props} isRequired />
);

export const Disabled = (props: TextFieldProps) => (
  <TextField {...props} isDisabled />
);

export const Invalid = (props: TextFieldProps) => (
  <TextField {...props} isInvalid />
);

export const Validation = (props: TextFieldProps) => (
  <Form method="post">
    <TextField {...props} />
  </Form>
);
Validation.args = {
  isRequired: true,
};
