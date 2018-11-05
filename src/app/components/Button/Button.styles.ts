import { media, state, styled } from '../../styles';

const buttonPhoneStyle: string = `
  background: blue;
  width: 300px;
  color: white;
`;

const buttonTabletStyle: string = `
  background: red;
  width: 300px;
  color: white;
`;

const buttonActiveState: string = `
  transform: scale(0.97);
`;

export const ButtonContainer = styled.button`
  position: relative;
  display: flex;
  background: green;
  justify-content: center;
  align-items: center;
  height: 42px;
  font-size: 1rem; 
  border-radius: 5px;
  transition: 200ms ease;
  cursor: pointer;
  border: none;
  text-decoration: none;
  ${media.phone(buttonPhoneStyle)}
  ${media.tablet(buttonTabletStyle)}
  ${state.active(buttonActiveState)}
`;
