import { Product } from "@/types";

export const products: Product[] = [
  {
    id: "1",
    name: "Pure Wildflower Honey",
    slug: "pure-wildflower-honey",
    description:
      "Unprocessed, raw wildflower honey harvested from pristine meadows. Rich in natural enzymes and antioxidants.",
    longDescription:
      "Our Pure Wildflower Honey is harvested from bees that forage across untouched wildflower meadows. This raw, unfiltered honey retains all its natural enzymes, pollen, and antioxidants. Each jar captures the diverse floral essence of the season, resulting in a complex, multi-layered flavor profile that changes subtly with every harvest. Perfect for drizzling over toast, adding to tea, or enjoying straight from the spoon.",
    price: 24.99,
    compareAtPrice: 29.99,
    images: [
      "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=800&q=80",
      "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=800&q=80",
    ],
    category: "raw",
    size: "500g",
    weight: "500g",
    benefits: [
      "Rich in natural antioxidants",
      "Contains beneficial enzymes",
      "Supports immune health",
      "Natural energy source",
    ],
    ingredients: ["100% Raw Wildflower Honey"],
    nutritionalInfo: {
      servingSize: "1 tablespoon (21g)",
      calories: 64,
      totalCarbs: "17g",
      sugars: "17g",
      protein: "0g",
    },
    reviews: [
      {
        id: "r1",
        author: "Amara K.",
        rating: 5,
        date: "2025-12-15",
        comment:
          "The best honey I've ever tasted. You can really tell it's pure and unprocessed. The flavor is incredible!",
        verified: true,
      },
      {
        id: "r2",
        author: "David M.",
        rating: 5,
        date: "2025-11-28",
        comment:
          "Beautiful golden color and amazing taste. My whole family loves it.",
        verified: true,
      },
      {
        id: "r3",
        author: "Sarah L.",
        rating: 4,
        date: "2025-11-10",
        comment:
          "Very good quality honey. Slightly pricey but worth every penny.",
        verified: true,
      },
    ],
    inStock: true,
    featured: true,
    tags: ["bestseller", "raw", "organic"],
  },
  {
    id: "2",
    name: "Cinnamon Infused Honey",
    slug: "cinnamon-infused-honey",
    description:
      "A warming blend of pure honey and Ceylon cinnamon. Perfect for teas, baking, and morning routines.",
    longDescription:
      "Our Cinnamon Infused Honey combines the natural sweetness of pure honey with the warm, aromatic essence of premium Ceylon cinnamon. Each batch is slow-infused over several weeks to ensure the cinnamon flavor fully permeates the honey. Ideal for stirring into warm beverages, drizzling over oatmeal, or using as a glaze for baked goods. The combination of honey and cinnamon has been cherished for centuries for its delicious flavor and wellness properties.",
    price: 28.99,
    images: [
      "https://images.unsplash.com/photo-1471943311424-646960669fbc?w=800&q=80",
      "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=800&q=80",
    ],
    category: "infused",
    size: "350g",
    weight: "350g",
    benefits: [
      "Anti-inflammatory properties",
      "Supports digestion",
      "Warming and soothing",
      "Rich in antioxidants",
    ],
    ingredients: ["Raw Honey", "Ceylon Cinnamon"],
    nutritionalInfo: {
      servingSize: "1 tablespoon (21g)",
      calories: 62,
      totalCarbs: "16g",
      sugars: "16g",
      protein: "0g",
    },
    reviews: [
      {
        id: "r4",
        author: "Kwame A.",
        rating: 5,
        date: "2025-12-01",
        comment:
          "This is my morning staple now. A spoonful in warm water is the perfect way to start the day.",
        verified: true,
      },
      {
        id: "r5",
        author: "Fatima N.",
        rating: 4,
        date: "2025-10-20",
        comment:
          "Lovely cinnamon flavor. Not too overpowering, just right.",
        verified: true,
      },
    ],
    inStock: true,
    featured: true,
    tags: ["popular", "infused"],
  },
  {
    id: "3",
    name: "Raw Forest Honey",
    slug: "raw-forest-honey",
    description:
      "Dark, robust honey sourced from deep forest apiaries. Intense flavor with mineral-rich complexity.",
    longDescription:
      "Our Raw Forest Honey is sourced from beehives nestled deep within lush tropical forests. The bees forage on a diverse range of forest blossoms and tree sap, producing a dark, intensely flavored honey with remarkable mineral content. This honey crystallizes naturally over time — a sign of its purity. Its bold, slightly smoky flavor makes it perfect for marinades, cheese pairings, and gourmet cooking.",
    price: 32.99,
    images: [
      "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=800&q=80",
      "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=800&q=80",
    ],
    category: "raw",
    size: "500g",
    weight: "500g",
    benefits: [
      "Higher mineral content",
      "Powerful antioxidant properties",
      "Supports respiratory health",
      "Natural antibacterial qualities",
    ],
    ingredients: ["100% Raw Forest Honey"],
    nutritionalInfo: {
      servingSize: "1 tablespoon (21g)",
      calories: 60,
      totalCarbs: "16g",
      sugars: "15g",
      protein: "0.1g",
    },
    reviews: [
      {
        id: "r6",
        author: "Emmanuel O.",
        rating: 5,
        date: "2025-12-10",
        comment:
          "The depth of flavor is outstanding. This is real honey, not the processed stuff from stores.",
        verified: true,
      },
    ],
    inStock: true,
    featured: true,
    tags: ["premium", "raw"],
  },
  {
    id: "4",
    name: "Ginger Infused Honey",
    slug: "ginger-infused-honey",
    description:
      "Zesty ginger meets sweet honey in this invigorating blend. A natural remedy for cold days and sore throats.",
    longDescription:
      "Our Ginger Infused Honey is a powerful fusion of premium raw honey and fresh organic ginger root. The ginger is slowly infused into the honey, creating a spicy-sweet combination that tingles the palate. Long valued as a natural remedy, this honey is perfect for soothing sore throats, calming upset stomachs, and adding a kick to your culinary creations. Enjoy it in teas, smoothies, stir-fries, or simply by the spoonful.",
    price: 26.99,
    images: [
      "https://images.unsplash.com/photo-1471943311424-646960669fbc?w=800&q=80",
      "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=800&q=80",
    ],
    category: "infused",
    size: "350g",
    weight: "350g",
    benefits: [
      "Soothes sore throats",
      "Aids digestion",
      "Anti-nausea properties",
      "Boosts immunity",
    ],
    ingredients: ["Raw Honey", "Organic Ginger Root"],
    nutritionalInfo: {
      servingSize: "1 tablespoon (21g)",
      calories: 61,
      totalCarbs: "16g",
      sugars: "15g",
      protein: "0g",
    },
    reviews: [
      {
        id: "r7",
        author: "Grace T.",
        rating: 5,
        date: "2025-11-15",
        comment:
          "This saved me during flu season. The ginger kick is perfect and it tastes amazing in tea.",
        verified: true,
      },
      {
        id: "r8",
        author: "Peter W.",
        rating: 4,
        date: "2025-10-05",
        comment:
          "Great product. The ginger flavor is noticeable but balanced well with the honey sweetness.",
        verified: true,
      },
    ],
    inStock: true,
    featured: false,
    tags: ["wellness", "infused"],
  },
  {
    id: "5",
    name: "Creamed Vanilla Honey",
    slug: "creamed-vanilla-honey",
    description:
      "Silky smooth creamed honey with Madagascar vanilla. Spreadable luxury for breakfast and desserts.",
    longDescription:
      "Our Creamed Vanilla Honey is a luxurious blend of slowly crystallized pure honey and real Madagascar vanilla bean. The creaming process creates a velvety, spreadable texture that melts on your tongue. The delicate vanilla aroma enhances the natural floral notes of the honey. Spread it on warm scones, swirl it into yogurt, or use it as an elegant topping for pancakes and waffles. This is honey elevated to a gourmet experience.",
    price: 34.99,
    images: [
      "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=800&q=80",
      "https://images.unsplash.com/photo-1471943311424-646960669fbc?w=800&q=80",
    ],
    category: "creamed",
    size: "300g",
    weight: "300g",
    benefits: [
      "Smooth, spreadable texture",
      "Natural mood enhancer",
      "Rich in antioxidants",
      "Versatile culinary use",
    ],
    ingredients: ["Creamed Honey", "Madagascar Vanilla Bean"],
    nutritionalInfo: {
      servingSize: "1 tablespoon (21g)",
      calories: 65,
      totalCarbs: "17g",
      sugars: "17g",
      protein: "0g",
    },
    reviews: [
      {
        id: "r9",
        author: "Linda B.",
        rating: 5,
        date: "2025-12-20",
        comment:
          "Absolutely divine! The texture is like butter and the vanilla flavor is so natural. My kids love it.",
        verified: true,
      },
    ],
    inStock: true,
    featured: true,
    tags: ["luxury", "creamed"],
  },
  {
    id: "6",
    name: "Natural Honeycomb",
    slug: "natural-honeycomb",
    description:
      "Fresh-cut honeycomb straight from the hive. The most authentic honey experience you can get.",
    longDescription:
      "Experience honey in its most natural form with our Fresh-Cut Honeycomb. Each piece is carefully harvested and cut directly from the hive, preserving the delicate beeswax cells filled with pure, unprocessed honey. Chewing honeycomb is a truly primal experience — the wax slowly releases bursts of floral honey as you chew. Pair it with artisan cheeses, spread it on crusty bread, or display it as a stunning centerpiece at your next dinner party.",
    price: 39.99,
    images: [
      "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=800&q=80",
      "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=800&q=80",
    ],
    category: "honeycomb",
    size: "400g",
    weight: "400g",
    benefits: [
      "100% unprocessed",
      "Contains natural beeswax",
      "Rich in bee pollen",
      "Unique texture experience",
    ],
    ingredients: ["100% Natural Honeycomb"],
    nutritionalInfo: {
      servingSize: "30g",
      calories: 90,
      totalCarbs: "22g",
      sugars: "20g",
      protein: "0.2g",
    },
    reviews: [
      {
        id: "r10",
        author: "Yemi A.",
        rating: 5,
        date: "2025-11-30",
        comment:
          "This is incredible. You can taste the difference when honey hasn't been processed at all. A real treat!",
        verified: true,
      },
      {
        id: "r11",
        author: "Chen W.",
        rating: 5,
        date: "2025-10-25",
        comment:
          "Perfect gift idea. Everyone was amazed by the honeycomb presentation.",
        verified: true,
      },
    ],
    inStock: true,
    featured: true,
    tags: ["premium", "honeycomb", "gift"],
  },
  {
    id: "7",
    name: "Beecone Gift Set",
    slug: "beecone-gift-set",
    description:
      "A curated trio of our finest honeys. The perfect gift for honey lovers and food enthusiasts.",
    longDescription:
      "The Beecone Gift Set brings together three of our most beloved honeys in an elegantly packaged collection. Includes our Pure Wildflower Honey (200g), Cinnamon Infused Honey (200g), and Creamed Vanilla Honey (200g). Each jar is adorned with our signature gold label and nestled in a premium gift box with a hand-written tasting guide. Whether for birthdays, holidays, or corporate gifting, this set delivers a memorable, sweet experience.",
    price: 64.99,
    compareAtPrice: 74.99,
    images: [
      "https://images.unsplash.com/photo-1471943311424-646960669fbc?w=800&q=80",
      "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=800&q=80",
    ],
    category: "gift-set",
    size: "3 × 200g",
    weight: "600g",
    benefits: [
      "Three unique flavors",
      "Premium gift packaging",
      "Tasting guide included",
      "Perfect for any occasion",
    ],
    ingredients: [
      "Raw Wildflower Honey",
      "Cinnamon Infused Honey",
      "Creamed Vanilla Honey",
    ],
    nutritionalInfo: {
      servingSize: "1 tablespoon (21g)",
      calories: 64,
      totalCarbs: "17g",
      sugars: "17g",
      protein: "0g",
    },
    reviews: [
      {
        id: "r12",
        author: "Rebecca S.",
        rating: 5,
        date: "2025-12-25",
        comment:
          "Bought this as a Christmas gift and the presentation blew everyone away. All three honeys are fantastic.",
        verified: true,
      },
    ],
    inStock: true,
    featured: true,
    tags: ["gift", "bestseller"],
  },
  {
    id: "8",
    name: "Turmeric Golden Honey",
    slug: "turmeric-golden-honey",
    description:
      "Anti-inflammatory powerhouse combining raw honey with organic turmeric and black pepper.",
    longDescription:
      "Our Turmeric Golden Honey is a potent wellness blend inspired by ancient healing traditions. We combine premium raw honey with organic turmeric and a touch of black pepper to enhance curcumin absorption. The result is a vibrant golden honey with earthy, slightly spicy undertones. Stir it into warm milk for a comforting golden latte, add it to smoothies, or take a spoonful daily as part of your wellness routine.",
    price: 29.99,
    images: [
      "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=800&q=80",
      "https://images.unsplash.com/photo-1471943311424-646960669fbc?w=800&q=80",
    ],
    category: "infused",
    size: "350g",
    weight: "350g",
    benefits: [
      "Anti-inflammatory properties",
      "Supports joint health",
      "Boosts immunity",
      "Enhanced curcumin absorption",
    ],
    ingredients: ["Raw Honey", "Organic Turmeric", "Black Pepper"],
    nutritionalInfo: {
      servingSize: "1 tablespoon (21g)",
      calories: 60,
      totalCarbs: "15g",
      sugars: "14g",
      protein: "0.1g",
    },
    reviews: [
      {
        id: "r13",
        author: "Adeola F.",
        rating: 5,
        date: "2025-11-20",
        comment:
          "The golden latte recipe on the label is amazing. I make it every morning now.",
        verified: true,
      },
    ],
    inStock: true,
    featured: false,
    tags: ["wellness", "infused"],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "all") return products;
  return products.filter((p) => p.category === category);
}

export const categoryLabels: Record<string, string> = {
  all: "All Products",
  raw: "Raw Honey",
  infused: "Infused Honey",
  creamed: "Creamed Honey",
  honeycomb: "Honeycomb",
  "gift-set": "Gift Sets",
};
