import styled from "styled-components";

export const Fromsubmit = styled.form`
  
  display: grid;
  grid-template-columns:1fr 1fr 1fr 1fr 0.3fr;
  gap:20px;
  background:#fff;padding:20px;
  box-sizing: border-box;
  margin-top:20px;
  border-radius:10px;
  align-items: flex-end;
`

export const Formdiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormSaveBtn=styled.button`
  background:lightblue;
  border:none;
  border-radius: 10px;
  height:40px;
`

export const Formlabel = styled.label`
  margin-bottom:10px;
`

export const Forminput = styled.input`
  height:30px;

`