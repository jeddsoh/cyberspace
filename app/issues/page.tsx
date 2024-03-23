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
import React from "react"
import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation"

interface IIssueForm {
  title: string
  description: string
}

export const Issues = () => {
  const router = useRouter()
  const { register, handleSubmit } = useForm<IIssueForm>()
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

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
            <form
              onSubmit={handleSubmit(async (data) => {
                try {
                  const response = await fetch("/api/issues", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                  })
                  if (!response.ok) {
                    throw new Error(`Error: ${response.status}`)
                  }
                  const responseData = await response.json()
                  console.log(responseData)
                } catch (error) {
                  console.error("Submission error:", error)
                }
                router.push('/issues')
              })}
            >
              <ModalHeader className="flex flex-col gap-1">
                Create New Issue
              </ModalHeader>
              <ModalBody>
                <Input
                  label="Title"
                  labelPlacement="inside"
                  {...register("title")}
                ></Input>
                <Textarea
                  label="Description"
                  labelPlacement="inside"
                  {...register("description")}
                />
              </ModalBody>
              <ModalFooter>
                <Button variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button
                  variant="shadow"
                  color="primary"
                  type="submit"
                  onPress={onClose}
                >
                  Create Issue
                </Button>
              </ModalFooter>
            </form>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}

export default Issues
