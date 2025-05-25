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

interface SigilTossProps {
  prompt: string
}

export function SigilToss({ prompt }: SigilTossProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <div
          className="sigil-container my-6 p-4 border border-[#00ff9f]/30 bg-black/30 rounded-lg cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          <span className="sigil text-xl mr-2" aria-label="Toss sigil - click to open ritual prompt">
            {"{∴}"}
          </span>
          <span className="font-mono text-[#00ff9f]">
            <strong>Ritual Pause</strong>: {prompt}
          </span>
        </div>
      </DialogTrigger>
      <DialogContent className="bg-black/90 border-[#00ff9f] text-[#f5f5f5]">
        <DialogHeader>
          <DialogTitle className="text-[#00ff9f] font-mono text-xl flex items-center">
            <span className="mr-2">{"{∴}"}</span> Fermentation Ritual
          </DialogTitle>
          <DialogDescription className="text-[#f5f5f5]/80">
            Pause. Let this resonate. Allow incoherence to ferment.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <p className="mb-4 text-lg">{prompt}</p>
          <textarea
            className="w-full h-32 bg-black/50 border border-[#00ff9f]/30 rounded-md p-3 text-[#f5f5f5] font-mono focus:border-[#00ff9f] focus:outline-none"
            placeholder="Record your reflections here..."
            aria-label="Reflection text area"
          />
        </div>
        <div className="flex justify-end">
          <Button className="bg-[#00ff9f] text-black hover:bg-[#00ff9f]/80" onClick={() => setIsOpen(false)}>
            Complete Ritual
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
