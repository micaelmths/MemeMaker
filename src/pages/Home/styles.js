import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Card = styled.div`
  background: #FFF;
  width: 550px;
  border-radius: 8px;
  padding: 20px;
  margin-top: 15px;
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.20);
  /* justify-content: center; */

  h2 {
    font-size: 22px;
    color: #392d2d;
    margin-bottom: 10px;
  }

`;

export const Tamplates = styled.div`
  width: 100%;
  height: 90px;
  background: #eee;
  border-radius: 8px;
  overflow-y: auto;
  display: flex;
  align-items: center;
  padding: 0 15px;
  margin-bottom: 30px;

  button {
    border: 0;
    background: transparent;
    margin-right: 10px;
    &.selected {
      border: 2px solid #4395d8;

    }
    img {
      width: 53px;
      height: 53px;
    }
  }
`;

export const Form = styled.form`
  input {
    width: 100%;
    height: 40px;
    border-radius: 8px;
    border: 1px solid #dbdbdb;
    padding: 0 15px;
    font-size: 14px;
    margin-bottom: 10px;
  }
`;

export const Buttom = styled.button`
  width: 100%;
  height: 40px;
  border: 0;
  border-radius: 8px;
  background: #4395d8;
  color: #FFF;
  font-weight: bold;
  transition: background 0.2s ease-in;
  font-size: 15px;

  &:hover {
    background: #3672a3;
  }
`;
