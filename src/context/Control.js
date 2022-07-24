const Control = ({ handle }) => {
    return (<button onClick={() => {
        handle()
            .then(() => console.log("success"))
            .catch(() => console.log("error"))
    }}>Test</button>)
}
export default Control