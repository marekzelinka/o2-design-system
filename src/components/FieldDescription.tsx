import { Text, type TextProps } from "react-aria-components";

export type FieldDescriptionProps = TextProps;

export function FieldDescription({
  className,
  ...props
}: FieldDescriptionProps) {
  return <Text slot="description" className={className} {...props} />;
}
