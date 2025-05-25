"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface SigilNecroProps {
  prompt: string
}

export function SigilNecro({ prompt }: SigilNecroProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <div
          className="sigil-container my-6 p-4 border border-[#8b00ff]/30 bg-black/30 rounded-lg cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          <span className="sigil text-xl mr-2" aria-label="Necro sigil - click to open necromancy prompt">
            {"{⊡}"}
          </span>
          <span className="font-mono text-[#8b00ff]">
            <strong>Necro Prompt</strong>: {prompt}
          </span>
        </div>
      </DialogTrigger>
      <DialogContent className="bg-black/90 border-[#8b00ff] text-[#f5f5f5]">
        <DialogHeader>
          <DialogTitle className="text-[#8b00ff] font-mono text-xl flex items-center">
            <span className="mr-2">{"{⊡}"}</span> Note Necromancy
          </DialogTitle>
          <DialogDescription className="text-[#f5f5f5]/80">
            Resurrect past thoughts. Bring them into new contexts.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <p className="mb-4 text-lg">{prompt}</p>
          <textarea
            className="w-full h-32 bg-black/50 border border-[#8b00ff]/30 rounded-md p-3 text-[#f5f5f5] font-mono focus:border-[#8b00ff] focus:outline-none"
            placeholder="Resurrect your past notes here..."
            aria-label="Necromancy text area"
          />
        </div>
        <div className="flex justify-end">
          <Button className="bg-[#8b00ff] text-[#f5f5f5] hover:bg-[#8b00ff]/80" onClick={() => setIsOpen(false)}>
            Complete Necromancy
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
