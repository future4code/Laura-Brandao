enum GENDER {
  ACAO = "ação",
  DRAMA = "drama",
  COMEDIA = "comédia",
  ROMANCE = "romance",
  TERROR = "terror",
}

function getGender(gender: string): GENDER {
  switch (gender) {
    case GENDER.ACAO:
      return GENDER.ACAO;
      break;
    case GENDER.COMEDIA:
      return GENDER.COMEDIA;
      break;
    case GENDER.DRAMA:
      return GENDER.DRAMA;
      break;
    case GENDER.ROMANCE:
      return GENDER.ROMANCE;
      break;
    case GENDER.TERROR:
      return GENDER.TERROR;
      break;
  }
}

type Movie = {
  name: string;
  releaseDate: number;
  gender: GENDER;
  score?: number;
};

function createMovie( name: string, releaseDate: number, gender: string, score?: number ): Movie {
  const movie: Movie = {
    name: name,
    releaseDate: releaseDate,
    gender: getGender(gender),
    score: score,
  };

  return movie
}

console.log(createMovie('Duna', 2021, "ação"))
