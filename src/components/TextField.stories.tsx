import type { Meta } from "@storybook/react";
import { Form } from "react-aria-components";
import { TextField } from "./TextField";

export const Example = (args: any) => <TextField {...args} />;

export const Validation = (args: any) => (
  <Form className="flex flex-col items-start gap-2">
    <TextField {...args} />
    <button type="submit">Submit</button>
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
