//  import { ReactPropTypes } from "react";
import className from 'classnames';

const finalClassName = className('px-3','py-1.5','border bg-blu');
console.log(finalClassName);
function Button({children,
primary,
secondary,
success,
warning,
danger,
outline,
rounded}){
    
    return <button className="px-3 py-1.5 border bg-blue-500 text-white border-blue-600">{children}</button>
}
Button.propTypes = {
    checkVariationValue:({ primary,secondary,success,warning,danger})=>{
        const count = Number(!!primary)+
        Number(!!secondary)+
        Number(!!warning)+
        Number(!!success)+
        Number(!!danger)
        if(count > 1){
            return new Error('only one of primary,secondary,success,danger can be true')
        }
    }
}
export default Button;