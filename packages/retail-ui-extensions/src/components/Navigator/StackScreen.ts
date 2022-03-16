import { createRemoteComponent } from "@remote-ui/core";

export interface StackScreenProps {
    name: string;
    component: JSX.Element;
}

export const StackScreen = createRemoteComponent<"StackScreen", StackScreenProps>("StackScreen");
