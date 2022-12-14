import styled from 'styled-components'

export const HomeContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
    padding: 4rem;
    border-radius: 8px;
  }
`

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.5rem;

  color: #fff;
  font-size: 1.125rem;
  font-weight: bold;
`

const BaseInput = styled.input`
  background: transparent;
  height: 2.5rem;
  border: 0;
  border-bottom: 2px solid ${(props) => props.theme['gray-700']};
  font-weight: bold;
  font-size: 1.125rem;
  padding: 0 0.5rem;
  color: #fff;

  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme['green-300']};
  }

  ::placeholder {
    color: ${(props) => props.theme['gray-300']};
  }
`

export const TaskInput = styled(BaseInput)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`

export const MinutesAmountInput = styled(BaseInput)`
  width: 4rem;
`

export const CountdownContainer = styled.div`
  font-family: 'Roboto Mono', sans-serif;
  font-size: 10rem;
  line-height: 8rem;
  color: #fff;

  display: flex;
  gap: 1rem;

  span {
    background: linear-gradient(
      0deg,
      rgba(251, 57, 103, 1) 0%,
      rgba(254, 88, 70, 1) 100%
    );
    padding: 2rem 1rem;
    border-radius: 8px;
  }
`

export const Separator = styled.div`
  padding: 2rem 0;
  color: #fff;

  width: 4rem;
  overflow: hidden;

  display: flex;
  justify-content: center;
`

export const StartCountdownButton = styled.button`
  width: 100%;
  border: 0;
  padding: 1rem;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  font-weight: bold;

  cursor: pointer;

  background: ${(props) => props.theme['green-300']};
  color: ${(props) => props.theme['gray-800']};

  &:disabled {
    background: ${(props) => props.theme['gray-300']};
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background: ${(props) => props.theme['green-400']};
  }
`
