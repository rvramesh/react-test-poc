import Control from "./Control";

const toggle = (delegate)=>()=> new Promise((resolve, reject)=>{
    delegate()
    reject();
})

const SpecialControl = ({onClick})=> {
    return <Control onClick={toggle(onClick)}>Hello</Control>
}

export default SpecialControl;