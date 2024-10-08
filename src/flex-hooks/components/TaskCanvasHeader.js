import { TaskHelper } from "@twilio/flex-ui";
import DialingButton from "../../custom-components/DialingButton/DialingButton";

export function addDialingButton(flex) {
  flex.TaskCanvasHeader.Content.add(
    <DialingButton key="conversation-dialling-button" />,
  );
}
