const photos = (city, count) => Array.from(
  { length: count },
  (_, index) => `/travel/${city}/${city}-${String(index + 1).padStart(2, "0")}.webp`
);

export const travelPlaces = [
  {
    slug: "roma",
    name: "Roma",
    chineseName: "罗马",
    country: "Italy",
    cover: "/travel/roma/roma-13.webp",
    detail: "/travel/roma/roma-04.webp",
    photos: photos("roma", 14)
  },
  {
    slug: "florence",
    name: "Firenze",
    chineseName: "佛罗伦萨",
    country: "Italy",
    cover: "/travel/florence/florence-10.webp",
    detail: "/travel/florence/florence-01.webp",
    photos: photos("florence", 11)
  },
  {
    slug: "sydney",
    name: "Sydney",
    chineseName: "悉尼",
    country: "Australia",
    cover: "/travel/sydney/sydney-02.webp",
    detail: "/travel/sydney/sydney-01.webp",
    photos: photos("sydney", 12)
  }
];
