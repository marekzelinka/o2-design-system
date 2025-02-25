import {
  Input as RACInput,
  type InputProps as RACInputProps,
} from "react-aria-components";
import { cn } from "../lib/utils";

export type InputProps = RACInputProps;

export function Input({ className, ...props }: InputProps) {
  return (
    <RACInput
      className={cn(
        "h-5xl rounded-input border-none bg-surface-x-low px-m py-s text-base leading-[22px] font-normal tracking-[0.01px] text-content-on-neutral-xx-high caret-surface-brand outline-1 outline-surface-x-high placeholder:text-content-on-neutral-low data-[focused]:outline-3 data-[focused]:outline-state-default-focus not-data-[focused]:data-[hovered]:outline-3 not-data-[focused]:data-[hovered]:outline-state-default-hover data-[invalid]:text-content-on-neutral-danger data-[invalid]:caret-content-on-neutral-danger data-[invalid]:outline-surface-danger data-[invalid]:placeholder:text-surface-danger-variant not-data-[focused]:data-[invalid]:data-[hovered]:outline-surface-danger-variant",
        className,
      )}
      {...props}
    />
  );
}
