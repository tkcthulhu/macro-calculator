import { useRef, useState } from "react";

function MacroCalc() {

    const P = useRef(null);
    const C = useRef(null);
    const F = useRef(null);

    const [result, setResult] = useState()

    function handleM2C(P, C, F) {
        setResult((P*4)+(C*4)+(F*9))
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">Macro - Calorie Calculator</div>
            </div>
            <div className="row">
                <div className="col">Protien
                    <input type="number" ref={P} placeholder='Grams'/>
                </div>
            </div>
            <div className="row">
                <div className="col">Carbs
                    <input type="number" ref={C} placeholder='Grams'/>
                </div>
            </div>
            <div className="row">
                <div className="col">Fats
                    <input type="number" ref={F} placeholder='Grams'/>
                </div>
            </div>
            <div className="row">
                <button onClick={() => handleM2C(P.current.value, C.current.value, F.current.value)}>Calculate</button>
            </div>
            <div className="row">
                <div className="col">{result}</div>
            </div>
        </div>
    )
}

export default MacroCalc