import { FlexPlugin } from "@twilio/flex-plugin";
import { addDialingButton } from "./flex-hooks/components/TaskCanvasHeader";


const PLUGIN_NAME = "OutboundDiallingButtonOnChat";

export default class OutboundDiallingButtonOnChat extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof import('@twilio/flex-ui') }
   */
  async init(flex, manager) {
    addDialingButton(flex);
  }
}
