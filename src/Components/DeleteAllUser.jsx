import React from "react";
import { styled } from "styled-components";
import { useDispatch } from "react-redux";
import { deleteUser } from "../store/slices/UserSlice";


export const DeleteAllUser = () => {
  const dispatch = useDispatch()
  const deleteAllUser = ()=> {
    dispatch(deleteUser())


  }
  
  return <Wrapper>
    <button className="clear-btn" onClick={deleteAllUser}>clear users</button>
  </Wrapper>
};
const Wrapper = styled.section`
.clear-btn {
  
  background: transparent;
  border-radius: 3px;
  border: 2px solid #BF4F74;
  color: #BF4F74;
  margin: 0 1em;
  padding: 0.25em 1em;
 

}
`