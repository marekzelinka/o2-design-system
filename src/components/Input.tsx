import {
  Input as RACInput,
  type InputProps as RACInputProps,
} from "react-aria-components";

export type InputProps = RACInputProps;

export function Input({ className, ...props }: InputProps) {
  return <RACInput className={className} {...props} />;
}
