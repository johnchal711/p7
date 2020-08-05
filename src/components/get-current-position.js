/**
 * getCurrentPosition
 * @returns Promise<Object{ lat, lng }>
 *
 * More about navigator.geolocation.getCurrentPosition on:
 * https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition
 */
export const getCurrentPosition = async () =>
  new Promise((resolve, reject) => {
    // we need to check if the browser has support for geolocation
    if ("geolocation" in window.navigator) {
      window.navigator.geolocation.getCurrentPosition(
        // success
        ({ coords: { latitude: lat, longitude: lng } }) =>
          resolve({ lat, lng }),
        // error
        () => reject(),
        // options
        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0
        }
      );
    } else {
      reject();
    }
  });
