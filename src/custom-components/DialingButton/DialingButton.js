import { IconButton, Actions, styled } from "@twilio/flex-ui";

const IconContainer = styled.div`
  margin: auto;
  padding-right: 0.8em;
`;

const DialingButton = ({ task }) => {
  const onCallClient = () => {
    if (!task.attributes.from || typeof task.attributes.from !== 'string') {
      console.error("Número de telefone não está disponível.");
      return;
    }
    let phoneNumber = task.attributes.from.replace('whatsapp:', '');
    phoneNumber = phoneNumber.replace(/\D/g, '');

    if (!phoneNumber.startsWith('55')) {
      phoneNumber = '55' + phoneNumber;
    }

    phoneNumber = `+${phoneNumber}`;
    const callerId = task.From || "+551140403179";
    if (phoneNumber && callerId) {
      Actions.invokeAction("StartOutboundCall", {
        destination: phoneNumber,
        callerId: callerId,
        task
      }).then(() => {
        console.log("Outbound call initiated successfully.");
      }).catch(error => {
        console.error("Failed to start outbound call:", error);
      });

    } else {
      console.error("Número de telefone ou Caller ID inválido.");
    }
  };

  return (
    <IconContainer>
      <IconButton
        icon="CallBold"
        key="worker-directory-open"
        onClick={onCallClient}
        variant="secondary"
        title="Chamar"
      />
    </IconContainer>
  );
};

export default DialingButton;
