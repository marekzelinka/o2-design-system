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
        "block h-5xl w-full rounded-input px-xs py-s text-body-m font-body-m tracking-body-m",
        // Text color
        "text-content-on-neutral-xx-high data-disabled:text-content-on-neutral-low data-invalid:text-content-on-neutral-danger",
        // Placeholder color
        "placeholder:text-content-on-neutral-low data-invalid:placeholder:text-surface-danger-variant",
        // Caret color
        "caret-surface-brand not-data-disabled:data-invalid:caret-surface-danger",
        // Outline
        "outline-1 outline-surface-x-high data-disabled:outline-state-default-hover data-focused:outline-3 data-focused:outline-state-default-focus not-data-invalid:not-data-focused:data-hovered:outline-state-default-hover not-data-disabled:data-invalid:outline-surface-danger not-data-disabled:not-data-focused:data-invalid:data-hovered:outline-surface-danger-variant",
        className,
      )}
      {...props}
    />
  );
}

<div className="col" />;
