import {
  TextField as RACTextField,
  TextFieldProps as RACTextFieldProps,
  ValidationResult,
} from "react-aria-components";
import { cn } from "../lib/utils";
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
  className,
  ...props
}: TextFieldProps) {
  return (
    <RACTextField
      {...props}
      className={cn("group relative flex flex-col gap-xs", className)}
    >
      {label && (
        <Label>
          {label}{" "}
          <span className="text-sm leading-[17px] font-[550] tracking-[0.16px] text-content-on-neutral-medium group-data-invalid:text-surface-danger-variant group-data-required:hidden">
            Optional
          </span>
        </Label>
      )}
      <Input />
      {description && <FieldDescription>{description}</FieldDescription>}
      <FieldError>{errorMessage}</FieldError>
    </RACTextField>
  );
}
