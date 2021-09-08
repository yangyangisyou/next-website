import styled from '@emotion/styled';

const ButtonWrapper = styled.button(
  (props) => (
    {
      borderRadius: '20px',
      backgroundColor: props.disabled ? '#cccccc' : '#16b9b3',
      color: 'white',
      fontWeight: 'normal',
      cursor: 'pointer',
      whiteSpace: 'nowrap',
      padding: '5px 20px',
    }
  ),
);

export default ButtonWrapper;
