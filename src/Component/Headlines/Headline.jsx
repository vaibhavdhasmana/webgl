import React from 'react';
const Headlines = (props)=>{
    const {text,onClick,className,children}=props
    return(
        <div className={className} onClick={onClick}>
            {children || text}

        </div>
    )
}
export default Headlines;
