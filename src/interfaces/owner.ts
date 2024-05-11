import { Contact } from "./contact"

export interface Owner {
    firstname: string
    lastname: string
    fullname: string
    description: string
    image_url: string

    twitter: {
        id: string
        username: string
    }

    contacts: Contact[]
    mainStacks: string[]
}