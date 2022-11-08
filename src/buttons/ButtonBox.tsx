interface Props {
    children: React.ReactNode;
}

export default function ButtonBox({ children }: Props) {

    return (
        <div className="button-box">{children}</div>
    )
}