export class MovieSearchQueryParamsDTO {
  title: string;
  year?: string;
}

export class MovieSearchSuccessResponseDTO {
  statusCode: number;
  data: MovieSearchAPIResponseDTO;
}

export class MovieSearchFailedResponseDTO {
  statusCode: number;
  message: string;
}

export class MovieSearchAPIRequestDTO {
  title: string;
  year?: string;
}

export class MovieSearchAPIResponseDTO {
  title: string;
  year: string;
  plot: string;
  actors: string;
  poster: string;
  imdbRating: string;
}