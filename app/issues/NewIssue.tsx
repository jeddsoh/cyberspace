"use client"

import { Button } from "@nextui-org/button"
import { Input, Textarea } from "@nextui-org/input"
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/modal"
import { FaPlus } from "react-icons/fa"
import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { createIssueSchema } from "../validationSchemas"
import { z } from "zod"

type IssueForm = z.infer<typeof createIssueSchema>

export default function NewIssue() {
  // NextUI hook to handle modal interaction
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure()

  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid, errors },
  } = useForm<IssueForm>({
    resolver: zodResolver(createIssueSchema),
  })
  const [error, setError] = useState("")
  const postToAPI = async (data) => {
    try {
      setIsSubmitting(true)
      const response = await fetch("api/issues", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Indicating that the body will be JSON
        },
        body: JSON.stringify(data),
      })
      if (!response.ok) {
        throw new Error("Network response was not ok")
      }
      reset()
      setIsSubmitting(false)
      onClose()
    } catch (error) {
      setIsSubmitting(false)
      setError(`${error}`)
    }
  }

  const [isSubmitting, setIsSubmitting] = useState(false)

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
            <div>
              <form id="create-new-issue" onSubmit={handleSubmit(postToAPI)}>
                <ModalHeader className="flex flex-col gap-1">
                  Create New Issue
                </ModalHeader>
                <ModalBody className="gap-4">
                  {error && <p className="text-red-500">{error}</p>}
                  <Input
                    id="title-input"
                    variant="bordered"
                    label="Title"
                    labelPlacement="inside"
                    {...register("title")}
                    isInvalid={Boolean(errors.title)}
                    errorMessage={errors.title?.message}
                  ></Input>

                  <Textarea
                    id="description-input"
                    variant="bordered"
                    label="Description"
                    labelPlacement="inside"
                    {...register("description")}
                    isInvalid={Boolean(errors.description)}
                    errorMessage={errors.description?.message}
                  />
                </ModalBody>
                <ModalFooter>
                  {isSubmitting ? null :<Button variant="light" onPress={onClose}>
                    Close
                  </Button>}
                  <Button
                    isLoading={isSubmitting}
                    variant="solid"
                    color="primary"
                    type="submit"
                  >
                    {isSubmitting ? "Creating" : "Create Issue"}
                  </Button>
                </ModalFooter>
              </form>
            </div>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}
