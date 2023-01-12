import React, { ButtonHTMLAttributes } from 'react'
export interface propType extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string,
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void,
    children?: React.ReactNode,
    variant?: "filled" | "outlined",
    disabled?: boolean
    type?: "submit" | "button",
    size?: "md" | "sm"


}
const CustomDot = ({ onClick, ...rest }) => {
    const {
        onMove,
        index,
        active,
        carouselState: { currentSlide, deviceType }
    } = rest;
    const carouselItems = [];
    // onMove means if dragging or swiping in progress.
    // active is provided by this lib for checking if the item is active or not.
    return (
        <button
            className={active ? "active" : "inactive"}
            onClick={() => onClick()}
        >
            {React.Children.toArray(carouselItems)[index]}
        </button>
    );
}
export default CustomDot
{/* <Carousel showDots customDot={<CustomDot />}>
    {carouselItems}
</Carousel>; */}