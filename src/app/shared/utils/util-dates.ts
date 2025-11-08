export class UtilDates {

  static formatDateString(dateString: string): string {
    if (!dateString || dateString.length !== 8) {
      return '';
    }

    const day = dateString.substring(0, 2);
    const month = dateString.substring(2, 4);
    const year = dateString.substring(4, 8);

    return `${year}-${month}-${day}`;
  }

  static unformatDateString(formattedDate: string): string {
    if (!formattedDate || formattedDate.length !== 10) {
      return '';
    }

    const [year, month, day] = formattedDate.split('-');

    return `${day}${month}${year}`;
  }

  static formatHourString(hourString: string): string {
    if (!hourString) {
      return '';
    }

    let clean = hourString.replace(/\D/g, '');

    if (clean.length === 3 && clean[0] === '1' && Number(clean[2]) > 5) {
      clean = clean.substring(0, 2) + '0' + clean.substring(2);
    }

    else if (clean.length === 3 && Number(clean[2]) > 5) {
      clean = '0' + clean;
    }

    else if (clean.length === 3) {
      clean = '0' + clean;
    }

    clean = clean.padStart(4, '0');
    const hours = clean.substring(0, 2);
    const minutes = clean.substring(2, 4);

    return `${hours}:${minutes}`;
  }
}
