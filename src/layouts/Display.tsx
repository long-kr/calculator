interface Props {
    value: string | number
}

//Layout.tsx
export default function Display({ value }: Props) {

    return (
        <div className="calculator--display">
            {value}
        </div>
    )
}