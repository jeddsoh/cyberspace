"use client"

import { Button } from "@nextui-org/button"
import { Input, Textarea } from "@nextui-org/input"
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/modal"
import { useDisclosure } from "@nextui-org/react"
import { FaPlus } from "react-icons/fa"
import MDEditor from "@uiw/react-md-editor"
import { useState } from "react"
import React from "react"

export const Issues = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const [issueDescription, setIssueDescription] =
    React.useState("***Description***")

  return (
    <>
      <Button
        onPress={onOpen}
        color="primary"
        variant="shadow"
        startContent={<FaPlus />}
      >
        New Issue
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top-center"
        size="4xl"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Create New Issue
              </ModalHeader>
              <ModalBody>
                <Input label="Title" labelPlacement="inside"></Input>
                <MDEditor value={issueDescription} onChange={setIssueDescription} />
              </ModalBody>
              <ModalFooter>
                <Button variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button variant="shadow" color="primary" onPress={onClose}>
                  Create Issue
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}

export default Issues
