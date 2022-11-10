import React, { useState } from "react";
import Buttons from "../buttons/Buttons";
import Display from "./Display";
import ButtonBox from "../buttons/ButtonBox";

interface ICal {
    num: number | string ;
    result: number | string ;
    sign: string;
}

const btnValues = [
    ["C", "+-", "%", "/"],
    [7, 8, 9, "X"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, ".", "="],
  ];

const toLocaleString = (num: number | string) => 
  String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, "$1 ");

const removeSpaces = (num: number | string) => 
  num.toString().replace(/\s/g, "")

  //APP.tsx
export default function Layout() {

    const [cal, setCal] = useState<ICal>({
        sign: "",
        num: 0,
        result: 0
    });

    const numberClickHandler = (e: React.MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault();
        const value = (e.target as Element).innerHTML;

        if (removeSpaces(cal.num).length < 16) {
            setCal({
                ...cal,
                num: cal.num === 0 && value === "0"
                    ? 0 : Number(removeSpaces(cal.num)) % 1 === 0 
                    ? toLocaleString(Number(removeSpaces(cal.num + value))) : toLocaleString(cal.num + value),
                result: !cal.sign ? 0 : cal.result,
            })
        }
    };

    const commaClickHandler = (e: React.MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault();
        const value = (e.target as Element).innerHTML;

        setCal({
            ...cal,
            num: !cal.num.toString().includes(".") ? cal.num + value : cal.num,
        })
    };

    const signClickHandler = (e: React.MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault();
        const value = (e.target as Element).innerHTML;

        setCal({
            ...cal,
            sign: value,
            result: !cal.result && cal.num ? cal.num : cal.result,
            num: 0,
        })
    };

    const equalClickHandler  = () => {
        if (cal.sign && cal.num) {
            const math = (a: number, b: number, sign: string) => 
                sign === "+" ? a + b
                : sign === "-" ? a - b
                : sign === "*" ? a * b
                : a / b;
            
            setCal({
                ...cal,
                result: cal.num === "0" && cal.sign === "/"
                    ? "Can't divide with number 0" 
                    : toLocaleString(math(Number(cal.result), Number(cal.num), cal.sign)),
                sign: "",
                num: 0,
            })
        }
    };

    const invertClickHandler = () => {
        setCal({
            ...cal,
            num: cal.num ? toLocaleString(Number(removeSpaces(cal.num)) * -1) : 0,
            result: cal.result ? toLocaleString(Number(removeSpaces(cal.result)) * -1) : 0,
            sign: "",
        })
    };

    const percentClickHandler = () => {
        let num = cal.num ? parseFloat(removeSpaces(cal.num)) : 0;
        let result = cal.result ? parseFloat(removeSpaces(cal.result)) : 0;

        setCal({
            ...cal,
            num: (num /= Math.pow(100, 1)),
            result: (result /= Math.pow(100, 1)),
            sign: "",
        })
    };

    const resetClickHandler = () => {
        setCal({
            ...cal,
            sign: "",
            num: 0,
            result: 0,
        })
    };
    
    return (
        <div className="calculator">
            <Display value={cal.num ? cal.num : cal.result} />
            <ButtonBox> 
                {   btnValues.flat().map((btn, i) => (
                        <Buttons 
                            key={i}
                            value={btn}
                            clickHandler={
                                btn === "C" 
                                ? resetClickHandler : btn === "+-"
                                ? invertClickHandler : btn === "%"
                                ? percentClickHandler : btn === "="
                                ? equalClickHandler : btn === "+" || btn === "-" || 
                                    btn === "X" || btn === "/"
                                ? signClickHandler : btn === "."
                                ? commaClickHandler : numberClickHandler
                            }
                        />
                    ))
                }
            </ButtonBox>
        </div>
    );
};