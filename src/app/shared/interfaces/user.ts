export interface User {
  id?: string;
  fullName: string;
  cpf: string;
  email: string;
  phone: string;
  dateBirthday: string;
  password: string;
  role: string;
  avatar?: string;
  dailyHours: number;
  startTime: string;
  endTime: string;
}
