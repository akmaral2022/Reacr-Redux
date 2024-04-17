import styled, { DefaultTheme } from 'styled-components';
import { Form as AntdForm, Input as AntdInput, Button as AntdButton } from 'antd';

interface Theme {
  components: {
    Input: {
      labelColor: string;
    };
  };
}

export const Form = styled(AntdForm)`
`;

export const Input = styled(AntdInput)`
  &.ant-input {
    color: ${({ theme }: { theme: DefaultTheme & Theme }) => theme.components.Input.labelColor};
  }
`;

export const Button = styled(AntdButton)`
`;
