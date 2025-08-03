import { useId } from "react"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { type InputWithIconProps } from "@/types/types"

export function InputWithEndIconButton({
  icon: Icon,
  inputLabel,
  placeholder = 'Enter text',
  type = 'text',
}: InputWithIconProps) {
  const id = useId();

  return (
    <div className="*:not-first:mt-2">
      {inputLabel && <Label htmlFor={id}>{inputLabel}</Label>}
      <div className="flex rounded-md shadow-xs">
        <Input
          id={id}
          className="-me-px flex-1 rounded-e-none shadow-none focus-visible:z-10"
          placeholder={placeholder}
          type={type}
        />
        <button
          className="border-input bg-background text-muted-foreground/80 hover:bg-accent hover:text-accent-foreground focus-visible:border-ring focus-visible:ring-ring/50 inline-flex w-9 items-center justify-center rounded-e-md border text-sm transition-[color,box-shadow] outline-none focus:z-10 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
          aria-label="Subscribe"
        >
          <Icon size={16} aria-hidden="true" />
        </button>
      </div>
    </div>
  )
}
