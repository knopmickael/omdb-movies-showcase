import { Injectable, NotFoundException } from '@nestjs/common';
import axios from 'axios';
import { MovieSearchAPIRequestDTO, MovieSearchAPIResponseDTO } from './movies.dto';

@Injectable()
export class MoviesService {
  async search(
    options: MovieSearchAPIRequestDTO
  ): Promise<MovieSearchAPIResponseDTO> {

    const response = await axios.get(process.env.API, {
      params: {
        apiKey: process.env.API_KEY,
        t: options.title,
        y: options.year,
        type: 'movie',
        r: 'json'
      },
    });

    if (response.data.Response === 'False')
      throw new NotFoundException('Movie not found');

    const { Title, Year, Plot, Actors, Poster, imdbRating } = response.data;
    return {
      title: Title,
      year: Year,
      plot: Plot,
      actors: Actors,
      poster: Poster,
      imdbRating: imdbRating
    };
  }
}
