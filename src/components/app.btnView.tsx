'use client'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import {useState, useEffect} from 'react'
type Props = {
    typeBtn: string,
    content:string,
    iconName?:IconDefinition // iconName là tùy chọn, có thể không truyền vào
    firstIcon?:IconDefinition
}

const Btnview = (props: Props) => {
    const [firstIcon, setFirstIcon] = useState<IconDefinition | null>(null);
    const [icon, setIcon] = useState<IconDefinition | null>(null);
    useEffect(() => {
        if (props.iconName) {
            setIcon(props.iconName); 
        } // Cập nhật giá trị của icon khi props thay đổi
        if (props.firstIcon) {
            setFirstIcon(props.firstIcon); 
        } // Cập nhật giá trị của icon khi props thay đổi
    }, [props.iconName, props.firstIcon]);
  return (
    <button className={props.typeBtn}>
        {firstIcon && (
            <FontAwesomeIcon className="w-3" icon={firstIcon} />
        )}
        <p>{props.content}</p>
        {icon && (
            <FontAwesomeIcon className="w-3" icon={icon} />
        )}
        
    </button>
  )
}

export default Btnview