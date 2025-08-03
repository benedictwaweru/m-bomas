/**---------------------------------------------------------------------------------------
 * Copyright (c) 2025. All rights reserved.
 * This project is licensed under the Apache License.
 * See LICENSE file in the project root for license information.
 *-----------------------------------------------------------------------------------------*/

"use client"

import { useId } from "react"
import { MoonIcon, SunIcon } from "lucide-react"

import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { useTheme } from "@/hooks/useTheme";

export function DarkLightSwitch() {
  const id = useId();
  const { theme, setTheme } = useTheme();

  const isLight = theme === "light";

  return (
    <div className="inline-flex items-center gap-2">
      <Switch
        id={id}
        checked={isLight}
        onCheckedChange={checked => setTheme(checked ? "light" : "dark")}
        aria-label="Toggle switch"
      />
      <Label htmlFor={id}>
        <span className="sr-only">Toggle switch</span>
        {isLight ? (
          <SunIcon size={16} aria-hidden="true" />
        ) : (
          <MoonIcon size={16} aria-hidden="true" />
        )}
      </Label>
    </div>
  )
}
