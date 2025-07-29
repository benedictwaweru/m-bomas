import { type ReactNode } from "react";

import {
  Stepper,
  StepperIndicator,
  StepperItem,
  StepperSeparator,
  StepperTrigger,
} from "@/components/ui/stepper"

interface StepperCounterProps {
  steps: number[];
  children: ReactNode;
}

export function StepperCounter({ steps, children }: StepperCounterProps) {
  return (
    <div className="mx-auto max-w-xl space-y-8 text-center">
      <Stepper defaultValue={2}>
        {steps.map((step) => (
          <StepperItem key={step} step={step} className="not-last:flex-1">
            <StepperTrigger>
              <StepperIndicator />
            </StepperTrigger>
            {step < steps.length && <StepperSeparator />}
          </StepperItem>
        ))}
      </Stepper>
      <p
        className="text-muted-foreground mt-2 text-xs"
        role="region"
        aria-live="polite"
      >
        {children}
      </p>
    </div>
  )
}
