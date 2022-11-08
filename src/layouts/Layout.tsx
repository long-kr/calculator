import "./layouts.css";
import { useState } from "react";
import Buttons from "../buttons/Buttons";
import Display from "./Display";
import ButtonBox from "../buttons/ButtonBox";

interface ICal {
    num: number;
    result: number;
    sign: null |"+" | "-" | "*" | "/" | "%" ;
}

const btnValues = [
    ["C", "+-", "%", "/"],
    [7, 8, 9, "X"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, ".", "="],
  ];

export default function Layout() {

    const [cal, setCal] = useState<ICal>({
        sign: null,
        num: 0,
        result: 0
    });

    const numberClickHandler = (e: React.MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault()
        const value = Number((e.target as Element).innerHTML);

        setCal((pre: ICal) => ({
            ...pre,
            num: value
        }))

        console.log(cal.num);
    }

    return (
        <div className="calculator">
            <Display cal={cal} />
            <ButtonBox> 
                {   btnValues.flat().map((value, i) => (
                        <Buttons 
                            key={i}
                            value={value}
                            clickHandler={numberClickHandler}
                        />
                    ))
                }
            </ButtonBox>
        </div>
    );
};