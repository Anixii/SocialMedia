import { appRoutes } from "@/configs/routes/routes";
import { MessagesSquare, Settings, Users2 } from "lucide-react";

export const MENU = [
  { url: appRoutes.friends, Icon: Users2 },
  { url: appRoutes.chat, Icon: MessagesSquare },
  { url: appRoutes.settings, Icon: Settings },
];
