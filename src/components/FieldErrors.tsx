import {
  FieldError as RACFieldError,
  type FieldErrorProps as RACFieldErrorProps,
} from "react-aria-components";
import { cn } from "../lib/utils";

export type FieldErrorProps = RACFieldErrorProps;

export function FieldError({ className, ...props }: FieldErrorProps) {
  return (
    <RACFieldError
      className={cn(
        "text-sm leading-[17px] font-[550] tracking-[0.16px] text-content-on-neutral-danger",
        className,
      )}
      {...props}
    />
  );
}
