import { Owner } from "@/interfaces/owner"

export const ownerData: Owner = {
    firstname: "Guilherme",
    lastname: "Rodrigues",
    fullname: "Guilherme Rodrigues",
    description: "FullStack Developer",
    image_url: "/images/perfil.png",

    twitter: {
        id: "2824372050",
        username: "@CndGui"
    },

    contacts: [
        {
            prefix: "Email",
            contact: "work.guilherme@hotmail.com"
        },

        {
            prefix: "Discord",
            contact: "cndgui"
        }
    ],

    mainStacks: ["React", "Svelte", "NextJS", "TailwindCSS", "NestJS", "Spring", "MySQL", "PostgreSQL"]
}