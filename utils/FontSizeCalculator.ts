export const FontSizeCalculator = (fontSize: number, maxFontSize: number, deviceWidth: number) => {
    const scaledFontSize = Math.round(fontSize * deviceWidth / 375);
    return Math.min(scaledFontSize, maxFontSize);
};