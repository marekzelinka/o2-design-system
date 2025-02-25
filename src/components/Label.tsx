import {
  Label as RACLabel,
  type LabelProps as RACLabelProps,
} from "react-aria-components";
import { cn } from "../lib/utils";

export type LabelProps = RACLabelProps;

export function Label({ className, ...props }: LabelProps) {
  return (
    <RACLabel
      className={cn(
        "flex items-center gap-xs text-base leading-[22px] font-medium tracking-[0.16px] text-content-on-neutral-xx-high group-data-[required]:after:-ml-xs group-data-[required]:after:text-content-on-neutral-danger group-data-[required]:after:content-['*']",
        className,
      )}
      {...props}
    />
  );
}
