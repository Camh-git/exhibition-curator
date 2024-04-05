export function isNotBlank(record: any): boolean {
  if (
    record !== "" &&
    record !== undefined &&
    record !== null &&
    record !== "Unknown"
  ) {
    return true;
  } else {
    return false;
  }
}
