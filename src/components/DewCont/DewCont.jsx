// import { Link } from "react-router-dom"
import { DewCont, Link, Text } from "./DewCont.style"

export const Developer = () => {
    return(
    <Link
        href="https://github.com/iTSerhii85"
        target="_blank" rel="noreferrer"
    >
        <DewCont>
            <Text>© Phonebook 2023</Text>
            <Text>{' '} | {' '}</Text>
            <Text>Create by iTSerhii85</Text>
        </DewCont>
    </Link>
    )
}