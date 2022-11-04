import { useState } from "react";
import Buttons from "../buttons/Buttons";
import Display from "./Display";

interface Cal {
    num?: number;
    result?: number;
    sign?: null |"+" | "-" | "*" | "/";
}

const btnValues = [
    ["C", "+-", "%", "/"],
    [7, 8, 9, "X"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, ".", "="],
  ];

export default function Layout () {

    const [cal, setCal] = useState<Cal>({});

    const numberClickHandler = (e: any) => {
        e.preventDefault()
        console.log(e.target.innerHTML)
    }

    return (
        <div className="calculator">
            <Display cal={cal} />
            <div className="button-box"> 
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