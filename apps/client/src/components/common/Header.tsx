/**---------------------------------------------------------------------------------------
 * Copyright (c) 2025. All rights reserved.
 * This project is licensed under the Apache License.
 * See LICENSE file in the project root for license information.
 *-----------------------------------------------------------------------------------------*/

import { Link } from "react-router-dom"
import { Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { MobileLogoBlack, MobileLogoWhite } from "./Icons"
import { DarkLightSwitch } from "./DarkLightSwitch"
import { InputWithEndIconButton } from "./InputWithEndIconButton"

export function Header() {
  return (
    <header className="border-b px-4 md:px-6">
      <div className="flex h-16 items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex-1">
          <Link to="/" className="text-primary hover:text-primary/90">
            <MobileLogoWhite />
            <MobileLogoBlack />
          </Link>
        </div>
        {/* Middle area */}
        <div className="grow max-sm:hidden">
          <InputWithEndIconButton icon={Search} placeholder="Search properties..." />
        </div>
        {/* Right side */}
        <div className="flex flex-1 items-center justify-end gap-4">
          <Button asChild variant="ghost" size="sm" className="text-sm">
            <Link to="/login">Log In</Link>
          </Button>
          <Button asChild size="sm" className="text-sm">
            <Link to="/signup">Get Started</Link>
          </Button>
          <DarkLightSwitch />
        </div>
      </div>
    </header>
  )
}
