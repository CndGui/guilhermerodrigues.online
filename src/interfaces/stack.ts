export interface Stack {
    name: string
    url?: string
    image_url: string
    category: "front" | "back" | "db" | "vc" | "tool"
}