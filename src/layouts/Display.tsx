import "./display.css";

interface Props {
    cal: {
        number1?: number;
        number2?: number;
        result?: number;
        operator?: null |"+" | "-" | "*" | "/";
    };
}

export default function Display({ cal }: Props) {

    return (
        <div className="display">
            { !cal.result &&
                <h1>
                numbers: 
                    {cal.number1 ? cal.number1: ""} 
                    {cal.operator ? cal.operator: ""} 
                    {cal.number2 ? cal.number2 : ""} 
                </h1>
            }
            {   cal.result &&
                <h1>result: {cal.result}</h1>
            }
        </div>
    )
}