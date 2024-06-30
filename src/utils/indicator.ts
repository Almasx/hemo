export type Unit = "mg/dL" | "g/dL" | "mmol/L" | "µg/L";

export class MedicalIndicator {
  label: string;
  value: number;
  unit: Unit;
  referenceRange?: { min: number; max: number };

  constructor(
    value: number,
    unit: Unit,
    label: string,
    referenceRange?: { min: number; max: number }
  ) {
    this.value = value;
    this.label = label;
    this.unit = unit;
    this.referenceRange = referenceRange;
  }

  toString(): string {
    return `${this.value}, ${this.unit}`;
  }

  //   isInReferenceRange(): boolean {
  //     return (
  //       this.value >= this.referenceRange.min &&
  //       this.value <= this.referenceRange.max
  //     );
  //   }
}
