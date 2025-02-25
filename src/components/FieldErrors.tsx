import {
  FieldError as RACFieldError,
  type FieldErrorProps as RACFieldErrorProps,
} from "react-aria-components";

export type FieldErrorProps = RACFieldErrorProps;

export function FieldError({ className, ...props }: FieldErrorProps) {
  return <RACFieldError className={className} {...props} />;
}
