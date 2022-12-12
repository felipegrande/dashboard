import { Container, ToggleLabel, ToggleSelector } from "./styles";

interface IToggleProps{
    labelLeft: string,
    labelRigth: string,
    checked:  boolean;
    onChange(): void;
}

const Toggle: React.FC <IToggleProps> = ({labelLeft, labelRigth , checked , onChange}) => {
  return (
    <Container>
      <ToggleLabel> {labelLeft}</ToggleLabel>
      <ToggleSelector
        onChange={onChange}
        checked={checked}
        uncheckedIcon={false}
        checkedIcon={false}
      />
      <ToggleLabel> {labelRigth}</ToggleLabel>
    </Container>
  );
};

export default Toggle;
