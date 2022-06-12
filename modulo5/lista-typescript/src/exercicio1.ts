function nameAndBirthDate(name: string, date: string): string {
  const datesArray: string[] = date.split("/");
  const day: string = datesArray[0];
  const month: string = datesArray[1];
  const year: string = datesArray[2];

  switch (month) {
    case "01":
      return `Olá! Me chamo ${name}, nasci no dia ${day} do mês de janeiro do ano de ${year}`;
    case "02":
      return `Olá! Me chamo ${name}, nasci no dia ${day} do mês de fevereiro do ano de ${year}`;
    case "03":
      return `Olá! Me chamo ${name}, nasci no dia ${day} do mês de março do ano de ${year}`;
    case "04":
      return `Olá! Me chamo ${name}, nasci no dia ${day} do mês de abril do ano de ${year}`;
    case "05":
      return `Olá! Me chamo ${name}, nasci no dia ${day} do mês de maio do ano de ${year}`;
    case "06":
      return `Olá! Me chamo ${name}, nasci no dia ${day} do mês de junho do ano de ${year}`;
    case "07":
      return `Olá! Me chamo ${name}, nasci no dia ${day} do mês de julho do ano de ${year}`;
    case "08":
      return `Olá! Me chamo ${name}, nasci no dia ${day} do mês de agosto do ano de ${year}`;
    case "09":
      return `Olá! Me chamo ${name}, nasci no dia ${day} do mês de setembro do ano de ${year}`;
    case "10":
      return `Olá! Me chamo ${name}, nasci no dia ${day} do mês de outubro do ano de ${year}`;
    case "11":
      return `Olá! Me chamo ${name}, nasci no dia ${day} do mês de novembro do ano de ${year}`;
    case "12":
      return `Olá! Me chamo ${name}, nasci no dia ${day} do mês de dezembro do ano de ${year}`;
  }
}

console.log(nameAndBirthDate("Laura", "21/01/1990"));
