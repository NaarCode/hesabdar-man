// Extracted from src/utils/number.js in Hesabdar Man.
export function toPersianDigits(value) {
  if (value === null || value === undefined) return '';
  return String(value).replace(/[0-9]/g, d => '۰۱۲۳۴۵۶۷۸۹'[d]);
}

export function cleanDigits(value) {
  if (!value) return '';
  return String(value).replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d)).replace(/[^0-9]/g, '');
}
