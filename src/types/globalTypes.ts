export interface Message {
  message: string;
  type: "user" | "bot";
  id: string;
}
