import React, {HTMLAttributes, ReactNode} from 'react';
export interface Props extends HTMLAttributes<HTMLButtonElement>{
    /** Provide a text for the button */
    children: ReactNode;
    /**  Which variant look would you want to use */
    variant: 'primary' | 'secondary';
}

/**  This is speacial button!! */
export const Button = ({children, variant="primary", ...props}: Props) => {
    return(
        <button {...props} style={{backgroundColor: variant==='primary' ? 'blue' : 'gray', color:"white", border:"none", borderRadius:100, padding:10}}>
            {children}
        </button>
    )
}
