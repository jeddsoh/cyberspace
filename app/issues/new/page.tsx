"use client"

import { Input, Textarea } from "@nextui-org/input"
import { Button } from "@nextui-org/button"

export const NewIssue = () => {
  return (
    <div className="max-w-xl flex flex-col gap-4 items-start">
      <Input label="Title" labelPlacement="inside"></Input>
      <Textarea
        label="Description"
        labelPlacement="inside"
      />
      <Button color="primary">Create Issue</Button>
    </div>
  )
}

export default NewIssue
