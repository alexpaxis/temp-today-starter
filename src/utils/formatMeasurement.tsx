export const formatMeasurement = (value: number, unit: string = "°C"): string => {
    return `${value.toFixed(1)}${unit}`;
};