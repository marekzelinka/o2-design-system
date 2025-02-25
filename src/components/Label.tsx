import {
  Label as RACLabel,
  type LabelProps as RACLabelProps,
} from "react-aria-components";

export type LabelProps = RACLabelProps;

export function Label({ className, ...props }: LabelProps) {
  return <RACLabel className={className} {...props} />;
}
