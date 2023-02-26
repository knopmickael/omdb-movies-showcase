import { Controller, Get, Query, BadRequestException } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { MovieSearchQueryParamsDTO, MovieSearchSuccessResponseDTO, MovieSearchFailedResponseDTO } from './movies.dto';

@Controller('movies')
export class MoviesController {
  constructor(
    private readonly moviesService: MoviesService
  ) {}

  @Get('search')
  async search(
    @Query() query: MovieSearchQueryParamsDTO
  ): Promise<MovieSearchSuccessResponseDTO | MovieSearchFailedResponseDTO> {

    const { title, year } = query;

    if (!title || typeof title !== 'string')
      throw new BadRequestException('Title query parameter is required and must be a string');

    try {
      const results = await this.moviesService.search({ title, year });
      return {
        statusCode: 200,
        data: results,
      };

    } catch (error) {
      return {
        statusCode: error.status,
        message: error.message
      };
    }
  }
}
