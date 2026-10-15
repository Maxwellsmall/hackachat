"use client"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSubContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useState } from "react"

export function ModelPicker() {
  const [model, setModel] = useState("")

  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="ghost" className="text-[11px] border-border">{model ? model : "lLama 3.370b instruct"}</Button>} />
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuLabel>Available Models</DropdownMenuLabel>
          <DropdownMenuItem className="text-[11px]" onClick={() => setModel("Pareto latest")}>
            Pareto latest
          </DropdownMenuItem>
          <DropdownMenuItem className="text-[11px]" onClick={() => setModel("gemini 4 argon")}>
            gemini 4 argon
          </DropdownMenuItem>
          <DropdownMenuItem className="text-[11px]" onClick={() => setModel("gemini nano banana 2.1")}>
            gemini nano banana 2.1
          </DropdownMenuItem>
          
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
