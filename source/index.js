import booleanWithin from "@turf/boolean-within";
import { point } from "@turf/helpers";

/**
 * Checks if given coordinate is within Nigeria
 * @date 24/09/2023 - 15:41:45
 *
 * @async
 * @param {number} lat
 * @param {number} lng
 * @returns {boolean}
 */
const checkBoundary = async (lat, lng) => {
  const coordinate = point([lng, lat]);

  for (let i = 0; i < 3; i++) {
    const response = await fetch(`https://geodata.ucdavis.edu/gadm/gadm4.1/json/gadm41_NGA_${i}.json`);
    const country_data = await response.json();

    if (booleanWithin(coordinate, country_data.features[0]["geometry"])) {
      return true;
    } else {
      return false;
    }
  }
};

export default checkBoundary;
