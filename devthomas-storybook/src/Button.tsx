import React, {HTMLAttributes, ReactNode} from 'react';
export interface Props extends HTMLAttributes<HTMLButtonElement>{
    children: ReactNode;
    variant: 'primary' | 'secondary';


}
export const Button = ({children, variant="primary", ...props}: Props) => {
    return(
        <button {...props} style={{backgroundColor: variant==='primary' ? 'blue' : 'gray', color:"white", border:"none", borderRadius:100, padding:10}}>
            {children}
        </button>
    )
}

//todo  https://www.youtube.com/watch?v=qSkHRVLcj6U&list=PLlaDAvA2MhR272avJsnjLxT4Nmx2MgKo8&index=16&ab_channel=MariusEspejo
//todo ADD ONS  17:00
