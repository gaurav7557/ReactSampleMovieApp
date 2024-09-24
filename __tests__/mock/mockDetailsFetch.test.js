import axios from 'axios';
import { fetchCredits } from '../../services/services';
import { URL, API_KEY } from '../../config/const';

jest.mock("axios");

const id = 533535

describe("when Fetch Credits API call fails", () => {
    it("should return empty dict", async () => {
      // given
      const message = "Network Error";
      axios.get.mockRejectedValueOnce(new Error(message));

      // when
      const result = await fetchCredits(id);

      // then
      expect(axios.get).toHaveBeenCalledWith(`${URL}movie/${id}/credits?api_key=${API_KEY}`);
      expect(result).toEqual({});
    });
});

describe("when Fetch Credits API call succeeds", () => {
    it("should return crew count for deadpool", async () => {
      
        axios.get.mockReturnValueOnce({
            data: {
                crew: [{
                    adult: false,
                    gender: 2,
                    id: 17825,
                    known_for_department: "Directing",
                    name: "Shawn Levy",
                    original_name: "Shawn Levy",
                    popularity: 16.249,
                    profile_path: "/j1CXZgmfvFeD7S3PYtsEk8H3ebB.jpg",
                    credit_id: "622bc4c8a579f9006f1f0a6d",
                    department: "Directing",
                    job: "Director"
                }]
            }
        })

      // when
      const result = await fetchCredits(id);

      // then
      expect(axios.get).toHaveBeenCalledWith(`${URL}movie/${id}/credits?api_key=${API_KEY}`);
      expect(result.credits.crew.length).toEqual(1);
    });
});