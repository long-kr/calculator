import "./layouts.css"

interface Props {
    cal: {
        num?: string;
        result?: number;
        sign?: null |"+" | "-" | "*" | "/" | "%" ;
    };
}

export default function Display({ cal }: Props) {

    return (
        <div className="display">
            { !cal.result &&
                <h1> numbers: 
                    {cal.num ? cal.num: ""} 
                    {cal.sign ? cal.sign: ""} 
                </h1>
            }
            {   cal.result &&
                <h1>result: {cal.result}</h1>
            }
        </div>
    )
}