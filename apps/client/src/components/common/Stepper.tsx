"use client"

import { useState, type ReactNode } from "react"

import { Button } from "@/components/ui/button"
import {
  Stepper,
  StepperIndicator,
  StepperItem,
  StepperSeparator,
  StepperTrigger,
} from "@/components/ui/stepper"

interface StepperCounterProps {
  steps: Array<number>;
  children?: ReactNode;
}

export function StepperCounter({ steps, children }: StepperCounterProps) {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div className="mx-auto max-w-2xl space-y-8 text-center">
      <Stepper value={currentStep} onValueChange={setCurrentStep}>
        {steps.map((step) => (
          <StepperItem key={step} step={step} className="not-last:flex-1">
            <StepperTrigger asChild>
              <StepperIndicator />
            </StepperTrigger>
            {step < steps.length && <StepperSeparator />}
          </StepperItem>
        ))}
      </Stepper>
      <div className="flex flex-col space-x-4 space-y-4">
        {children}
        <div className="flex justify-center space-x-8">
          <Button
            variant="outline"
            className="w-32"
            onClick={() => setCurrentStep((prev) => prev - 1)}
            disabled={currentStep === 1}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            className="w-32"
            onClick={() => setCurrentStep((prev) => prev + 1)}
            disabled={currentStep > steps.length}
          >
            Next
          </Button>
        </div>
      </div>
      {/* <p
        className="text-muted-foreground mt-2 text-xs"
        role="region"
        aria-live="polite"
      >
        Controlled stepper with checkmarks
      </p> */}
    </div>
  )
}
