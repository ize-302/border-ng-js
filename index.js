import booleanWithin from "@turf/boolean-within";
import { point } from "@turf/helpers";
import fs from 'fs';
import path from 'path';

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
  const coordinate = point([lng, lat])
  for (let i = 0; i < 3; i++) {
    const file = path.join('./geodata/', `gadm41_NGA_${i}.json`)
    const file_exists = await fs.existsSync(file)
    if (file_exists) {
      fs.readFile(file, 'utf8', (err, data) => {
        const country_data = JSON.parse(data);
        if (booleanWithin(coordinate, country_data.features[0]['geometry'])) {
          return true
        } else {
          return false
        }
      });
    }
  }
}

export default checkBoundary