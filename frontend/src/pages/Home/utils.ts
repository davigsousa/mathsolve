export function getCoefficientLabel(index: number) {
  if (index === 0) return "Independent coefficient";

  return `Coefficient for x ** ${index}`;
}

interface GetSolvePayload {
  degree: string;
  coefficients: string[];
  k: string;
  initialValue: string;
  maxNumber: string;
  tolerance: string;
}

export function getSolveUrl({
  degree,
  coefficients,
  k,
  initialValue,
  maxNumber,
  tolerance,
}: GetSolvePayload) {
  let url = `/solve?dg=${degree}`;

  const degreeNumber = Number(degree);

  if (degreeNumber > 0) {
    for (let i = 0; i < degreeNumber + 1; i++) {
      url += `&c${i}=${coefficients[i]}`;
    }
  }

  url += `&k=${k}`;
  url += `&iniv=${initialValue}`;
  url += `&max=${maxNumber}`;
  url += `&tol=${tolerance}`;

  return url;
}
