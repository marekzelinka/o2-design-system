import {
  TextField as RACTextField,
  TextFieldProps as RACTextFieldProps,
  ValidationResult,
} from "react-aria-components";
import { cn } from "../lib/utils";
import { FieldDescription } from "./FieldDescription";
import { FieldError } from "./FieldErrors";
import { Input } from "./Input";
import { Label, labelVariants } from "./Label";

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
      className={cn("group flex flex-col gap-xs", className)}
    >
      {label && (
        <Label className="flex items-center gap-xs">
          {label}{" "}
          <span
            className={cn(
              labelVariants({ size: "sm" }),
              "text-content-on-neutral-medium group-data-required:hidden",
            )}
          >
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
