export const fadeInAnimationByIndex = {
    initial: { y: 20, opacity: 0 },
    animate: (i: number) => ({
        y: 0,
        opacity: 1,
        transition: { delay: i * 0.03 },
    }),
}

export const moveInAnimationByIndex = {
    initial: { y: 20, scale: 0.9, opacity: 0 },
    animate: (i: number) => ({
        y: 0,
        scale: 1,
        opacity: 1,
        transition: { delay: i * 0.03 },
    }),
}