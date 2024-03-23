"use client"

import { Input } from "@nextui-org/react"

export const NewIssue = () => {
  return (
    <div className="max-w-xl">
        <Input label="Title" labelPlacement="inside"></Input>
    </div>
  )
}

export default NewIssue
