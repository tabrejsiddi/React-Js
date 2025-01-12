import { useState } from 'react';
export const LiftingStateUp = () => {

    const [name, setName] = useState('');
  return (
    <>
    <InputComponent name={name} setName={setName}/>
    <DisplayComponent name={name} />
    </>
  );
};
const InputComponent = ({name,setName}) => {
    return (
        <>
        <input type="text"
         placeholder="Enter your name"
         value={name}
         onChange={(e) => setName(e.target.value)} />
        </>
    )
}
const DisplayComponent = ({name}) => {
    return (
        <>
        <p>The current input value is:{name}</p>
        </>
    )
}