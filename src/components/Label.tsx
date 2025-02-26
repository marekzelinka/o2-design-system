import { cva, type VariantProps } from "class-variance-authority";
import {
  Label as RACLabel,
  type LabelProps as RACLabelProps,
} from "react-aria-components";
import { cn } from "../lib/utils";

export const labelVariants = cva("", {
  variants: {
    size: {
      md: "text-label-m font-label-m tracking-label-m",
      sm: "text-label-s font-label-s tracking-label-s",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

<div className="text-label-m font-label-s tracking-label-m" />;

export type LabelProps = RACLabelProps & VariantProps<typeof labelVariants>;

export function Label({ className, ...props }: LabelProps) {
  return (
    <RACLabel
      className={cn(
        labelVariants({ className }),
        "block text-content-on-neutral-xx-high group-data-[required]:after:-ml-xs group-data-[required]:after:text-content-on-neutral-danger group-data-[required]:after:content-['*']",
      )}
      {...props}
    />
  );
}
