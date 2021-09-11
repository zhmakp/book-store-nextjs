export const db = {
  cart: [
    // { bookId: '1', quantity: 2 }
  ],
  books: [
    {
      id: '1',
      img: 'https://images.squarespace-cdn.com/content/v1/566ddb59e0327c1e77923bb8/1617226069638-RTESRQLXMJ8N5KHG2NUJ/9781733622042_An+Illustrated+Catalogue+of+American+Fruits+%26+Nuts_Cover01-lores.jpg?format=1000w', 
      title: 'An Illustrated Catalog of American Fruits & Nuts', 
      soldOut: false,
      type: 'book',
      description: `
      Talk Soon is the wordless quarantined dialogue between Dutch artist Erik Kessels and French artist Thomas Sauvin.

      Every day, throughout that tumultuous spring of 2020, Erik and Thomas sent one another idiosyncratic, uncaptioned photographs; catalysing an organic, free-associative exchange of some 120 archival images. 

      Atelier Éditions’ author Kingston Trinder then composed an equally free-associative, altogether-whimsical narrative with which to further entwine the duo’s eclectic photographs. These two archives of vernacular photography, one from the East, the other from the West, achieve a dialogue through the recurrence of photographic practices, aesthetics, and subjects.

      Talk Soon, a tearaway postcard book, allows readers to endlessly juxtapose the delightful photographs selected by the two quarantined artists.
      `,
      price: '40.00$'
    },
    {
      id: '2',
      img: 'https://images.squarespace-cdn.com/content/v1/566ddb59e0327c1e77923bb8/1608061159870-JJ5LTRMCXYL8M3L4ASCJ/image-asset.png?format=1000w', 
      title: 'Talk Soon by Erik Kessels &amp; Thomas Sauvin', 
      soldOut: false,
      type: 'preorder',
      description: `
      NOW IN STOCK An Illustrated Catalog of American Fruits & Nuts: The US Department of Agriculture Pomological Watercolor Collection began dispatching end of April, 2021.

      The United States Department of Agriculture Pomological Watercolor Collection encompasses over 7.500 botanical watercolor paintings of evolving fruit and nut varieties, alongside specimens introduced by USDA plant explorers from the late 19th and early 20th centuries. Assembled between 1886 and 1942, the collection’s remarkable, botanically accurate watercolors were executed by some 21 professional artists (including nine women). Authored largely before the widespread application of photography, the watercolors were intended to aid accurate identification and examination of fruit varietals, for the nation’s fruit growers. Documenting the transformation of American pomology, the science of fruit breeding and production, and the horticultural innovations accountable for contemporary fruit cultivation and consumption, the USDA’s collection offers fascinating anthropological and horticultural insights concerning the fruits we ecstatically devour, and why.
      `,
      price: '50.00$'
    },
  ]
}