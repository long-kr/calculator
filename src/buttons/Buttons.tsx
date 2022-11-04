import "./buttons.css"

interface Props {
    value: string | number;
    clickHandler: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Buttons ({ value, clickHandler }: Props) {

    return (
        <button className="button" onClick={clickHandler}>{value}</button>
    )
}