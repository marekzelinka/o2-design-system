import {
  FieldError as RACFieldError,
  type FieldErrorProps as RACFieldErrorProps,
} from "react-aria-components";
import { cn } from "../lib/utils";
import { labelVariants } from "./Label";

export type FieldErrorProps = RACFieldErrorProps;

export function FieldError({ className, ...props }: FieldErrorProps) {
  return (
    <RACFieldError
      className={cn(
        labelVariants({ size: "md" }),
        "text-content-on-neutral-danger",
        className,
      )}
      {...props}
    />
  );
}
