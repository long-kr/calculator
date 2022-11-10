interface Props {
    value: string | number;
    clickHandler: (e: React.MouseEvent<HTMLButtonElement>) => void
}

//Layout.tsx
export default function Buttons ({ value, clickHandler }: Props) {

    return (
        <button 
            className={ value === 0 
                ? "btn--large" : typeof(value) === "string"
                ? "btn--opaque" : ""
            }
            onClick={clickHandler}>
            {value}
        </button>
    )
}