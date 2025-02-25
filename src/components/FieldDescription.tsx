import { Text, type TextProps } from "react-aria-components";
import { cn } from "../lib/utils";

export type FieldDescriptionProps = TextProps;

export function FieldDescription({
  className,
  ...props
}: FieldDescriptionProps) {
  return (
    <Text
      slot="description"
      className={cn(
        "text-sm leading-[17px] font-[550] tracking-[0.16px] text-content-on-neutral-medium",
        className,
      )}
      {...props}
    />
  );
}
