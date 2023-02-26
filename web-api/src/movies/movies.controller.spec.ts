import { Test, TestingModule } from '@nestjs/testing';
import { BadRequestException, NotFoundException } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';

describe('MoviesController', () => {
  let controller: MoviesController;
  let moviesService: MoviesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MoviesController],
      providers: [MoviesService],
    }).compile();

    controller = module.get<MoviesController>(MoviesController);
    moviesService = module.get<MoviesService>(MoviesService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('search', () => {
    it('should return search results when given a valid title', async () => {
      const expectedResponse = {
        title: 'Ring',
        year: '1995',
        plot:
          'In different parts of Tokyo, four young and seemingly healthy people suddenly die of heart failure at exactly the same moment. Reporter Kazuyuki Asakawa decides to investigate the deaths, and discovers that the four had stayed at ...',
        actors: 'Katsunori Takahashi, Ayane Miura, Mai Tachihara',
        imdbRating: '6.3',
      };

      jest.spyOn(moviesService, 'search').mockResolvedValue(expectedResponse);

      const result = await controller.search({ title: 'Ring' });

      expect(result).toEqual({
        statusCode: 200,
        data: expectedResponse,
      });
    });

    it('should throw BadRequestException when given an invalid title', async () => {
      const invalidTitle = { title: '' };

      await expect(controller.search(invalidTitle)).rejects.toThrow(
        BadRequestException,
      );
      await expect(controller.search(invalidTitle)).rejects.toMatchObject({
        status: 400,
        message: 'Title query parameter is required and must be a string',
      });
    });

    it('should return a 404 error response when the movie is not found', async () => {
      const notFoundTitle = { title: 'Nonexistent Movie' };
      jest.spyOn(moviesService, 'search').mockRejectedValue(new NotFoundException('Movie not found'));

      const result = await controller.search(notFoundTitle);

      expect(result).toEqual({
        statusCode: 404,
        message: 'Movie not found',
      });
    });
  });
});
