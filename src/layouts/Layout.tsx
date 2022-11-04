import "./layouts.css";
import { useState } from "react";
import Buttons from "../buttons/Buttons";
import Display from "./Display";

interface ICal {
    num?: string;
    result?: number;
    sign?: null |"+" | "-" | "*" | "/" | "%" ;
}

const btnValues = [
    ["C", "+-", "%", "/"],
    [7, 8, 9, "X"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, ".", "="],
  ];

export default function Layout() {

    const [cal, setCal] = useState<ICal>({});

    const numberClickHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        const value = e.target.innerHTML;
        
        if (cal.num && cal.num.length < 16) {
            setCal((pre: ICal) => (
                ...pre,
                num: value;
            ))
        }
    }

    return (
        <div className="calculator">
            <Display cal={cal} />
            <div className="buttons-box"> 
                {   btnValues.flat().map((value, i) => (
                        <Buttons 
                            key={i}
                            value={value}
                            clickHandler={numberClickHandler}
                        />
                    ))
                }
            </div>
        </div>
    );
};