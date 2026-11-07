import { useState } from "react";

interface BeforeAfterSliderProps {
    beforeImg: string;
    afterImg: string;
}

function BeforeAfterSlider({ beforeImg, afterImg }: BeforeAfterSliderProps) {
    const [sliderPos, setSliderPos] = useState(50);
    const [isDragging, setIsDragging] = useState(false);

    const handleMove = (clientX: number, rect: DOMRect) => {
        const x = clientX - rect.left;
        let pos = (x / rect.width) * 100;

        if (pos < 0) pos = 0;
        if (pos > 100) pos = 100;

        setSliderPos(pos);
    };

    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        handleMove(e.touches[0].clientX, rect);
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isDragging) return;

        const rect = e.currentTarget.getBoundingClientRect();
        handleMove(e.clientX, rect);
    };

    return (
        <div
            className="before-after-slider"
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
        >
            <img src={afterImg} alt="After cleaning" className="before-after-slider__image" />

            <span className="before-after-slider__label before-after-slider__label--after">შემდეგ (სუფთა)</span>

            <div className="before-after-slider__before" style={{ width: `${sliderPos}%` }}>
                <img src={beforeImg} alt="Before cleaning" className="before-after-slider__image" />

                <span className="before-after-slider__label before-after-slider__label--before">მანამდე</span>
            </div>

            <div className="before-after-slider__divider" style={{ left: `${sliderPos}%` }}>
                <div className="before-after-slider__line"></div>

                <div className="before-after-slider__handle">↔</div>
            </div>
        </div>
    );
}

export default BeforeAfterSlider;
