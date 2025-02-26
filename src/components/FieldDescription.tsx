import { Text, type TextProps } from "react-aria-components";
import { cn } from "../lib/utils";
import { labelVariants } from "./Label";

export type FieldDescriptionProps = TextProps;

export function FieldDescription({
  className,
  ...props
}: FieldDescriptionProps) {
  return (
    <Text
      slot="description"
      className={cn(
        labelVariants({ size: "sm" }),
        "text-content-on-neutral-medium",
        className,
      )}
      {...props}
    />
  );
}
