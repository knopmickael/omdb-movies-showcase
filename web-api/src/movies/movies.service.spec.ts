import { Test, TestingModule } from '@nestjs/testing';
import { NotFoundException } from '@nestjs/common';
import axios from 'axios';
import { MoviesService } from './movies.service';

jest.mock('axios');

describe('MoviesService', () => {
  let service: MoviesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoviesService],
    }).compile();

    service = module.get<MoviesService>(MoviesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('search', () => {
    it('should return search results when given valid options', async () => {

      const expectedResponse = {
        Title: 'The Godfather',
        Year: '1972',
        Plot: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
        Actors: 'Marlon Brando, Al Pacino, James Caan',
        imdbRating: '9.2'
      };

      const options = { title: 'The Godfather', year: '1972' };
      (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValue({ data: expectedResponse, status: 200 });

      const result = await service.search(options);

      expect(axios.get).toHaveBeenCalledWith(process.env.API, {
        params: {
          apiKey: process.env.API_KEY,
          t: options.title,
          y: options.year,
          type: 'movie',
          r: 'json'
        }
      });

      expect(result).toEqual({
        title: expectedResponse.Title,
        year: expectedResponse.Year,
        plot: expectedResponse.Plot,
        actors: expectedResponse.Actors,
        imdbRating: expectedResponse.imdbRating
      });
    });

    it('should throw NotFoundException when movie is not found', async () => {

      const options = { title: 'Invalid Movie Title', year: '2022' };
      (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValue({ data: { Response: 'False' }, status: 200 });

      await expect(service.search(options)).rejects.toThrow(NotFoundException);
      await expect(service.search(options)).rejects.toMatchObject({
        message: 'Movie not found'
      });
    });

    it('should throw an error when API returns an unexpected status code', async () => {

      const options = { title: 'The Godfather', year: '1972' };
      (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValue({ status: 500 });

      await expect(service.search(options)).rejects.toThrow(Error);
    });
  });
});
