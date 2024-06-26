
export function searchImages(image) {
  const BASE_URL = 'https://pixabay.com';
  const END_POINT = '/api/';
  const params = new URLSearchParams({
    key: '44578932-6e2bdfbc9295001d2a495ef0a',
    q: image,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
    const url = `${BASE_URL}${END_POINT}?${params}`;
  return fetch(url).then(data => data.json());
}