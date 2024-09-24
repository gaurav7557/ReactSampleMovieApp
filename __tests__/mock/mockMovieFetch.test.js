import axios from 'axios';
import { fetchMovies } from '../../services/services';
import { URL, API_KEY } from '../../config/const';

jest.mock("axios");
const searchString = 'Deadpool'

describe("when Fetch Movie API call fails", () => {
    it("should return empty movies list", async () => {
      // given
      const message = "Network Error";
      axios.get.mockRejectedValueOnce(new Error(message));

      // when
      const result = await fetchMovies();

      // then
      expect(axios.get).toHaveBeenCalledWith(`${URL}movie/popular?api_key=${API_KEY}`);
      expect(result).toEqual([]);
    });
});

describe('when Fetch Movie Api Call Succeeds', () => {
    it('Mocking Response with name deadpool', async () => {
        axios.get.mockReturnValueOnce({
            data: {
                page: 1,
                results: [
                    {
                        adult: false,
                        backdrop_path: '/en971MEXui9diirXlogOrPKmsEn.jpg',
                        genre_ids: [28, 12, 35],
                        id: 293660,
                        original_language: 'en',
                        original_title: 'Deadpool',
                        overview: 'The origin story of former Special Forces operative turned mercenary Wade Wilson, who, after being subjected to a rogue experiment that leaves him with accelerated healing powers, adopts the alter ego Deadpool. Armed with his new abilities and a dark, twisted sense of humor, Deadpool hunts down the man who nearly destroyed his life.',
                        popularity: 162.025,
                        poster_path: '/3E53WEZJqP6aM84D8CckXx4pIHw.jpg',
                        release_date: '2016-02-09',
                        title: 'Deadpool',
                        video: false,
                        vote_average: 7.621,
                        vote_count: 30735
                    }
                ],
                total_pages: 1,
                total_results: 1
            }
        });
        const results = await fetchMovies(searchString);
        expect(axios.get).toHaveBeenCalledWith(`${URL}search/movie?api_key=${API_KEY}&language=en-US&query=${searchString}`)
        expect(results[0].title).toBe(searchString);
    });
})