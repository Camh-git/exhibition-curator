export function isNotBlank(record: any): boolean {
  try {
    if (
      record !== "" &&
      record !== undefined &&
      record !== null &&
      record !== "Unknown" &&
      record !== "None" &&
      record !== "In storage" &&
      record !== "In_storage" &&
      record !== "Storage"
    ) {
      return true;
    } else {
      return false;
    }
  } catch {
    return true;
  }
}
