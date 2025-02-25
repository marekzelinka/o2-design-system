import {
  TextField as RACTextField,
  TextFieldProps as RACTextFieldProps,
  ValidationResult,
} from "react-aria-components";
import { FieldDescription } from "./FieldDescription";
import { FieldError } from "./FieldErrors";
import { Input } from "./Input";
import { Label } from "./Label";

export interface TextFieldProps extends RACTextFieldProps {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
}

export function TextField({
  label,
  description,
  errorMessage,
  ...props
}: TextFieldProps) {
  return (
    <RACTextField {...props}>
      {label && <Label>{label}</Label>}
      <Input />
      {description && <FieldDescription>{description}</FieldDescription>}
      <FieldError>{errorMessage}</FieldError>
    </RACTextField>
  );
}
