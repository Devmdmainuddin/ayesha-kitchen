"use client";

import MenuCard1 from "@/components/card/MenuCard1";
import Container from "@/components/Container";
import { useEffect, useState } from "react";

const Menu = () => {
  const [category, setCategory] = useState([]);
  const [filteredFoods, setFilteredFoods] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPriceRange, setSelectedPriceRange] = useState("All");

  const foods = [
    {
      id: 1,
      name: "Margherita Pizza",
      description: "Classic pizza with fresh tomatoes, mozzarella, and basil.",
      price: 8.99,
      image: "/h1.jpg",
      category: "Pizza",
      availability: true,
    },
    {
      id: 2,
      name: "Pepperoni Pizza",
      description: "Loaded with pepperoni and melted cheese.",
      price: 9.99,
      image: "/h2.jpg",
      category: "Pizza",
      availability: true,
    },
    {
      id: 3,
      name: "Veggie Supreme Pizza",
      description: "Topped with bell peppers, onions, mushrooms, and olives.",
      price: 10.99,
      image: "/h3.jpg",
      category: "Pizza",
      availability: true,
    },
    {
      id: 4,
      name: "Hawaiian Pizza",
      description: "Sweet pineapple and savory ham on a cheese base.",
      price: 11.49,
      image: "/h4.jpg",
      category: "Pizza",
      availability: true,
    },
    {
      id: 5,
      name: "Caesar Salad",
      description: "Crisp romaine lettuce with Caesar dressing and croutons.",
      price: 6.99,
      image: "/h5.jpg",
      category: "Salad",
      availability: true,
    },
    {
      id: 6,
      name: "Greek Salad",
      description: "Fresh cucumbers, tomatoes, olives, and feta cheese.",
      price: 7.49,
      image: "/h1.jpg",
      category: "Salad",
      availability: true,
    },
    {
      id: 7,
      name: "Caprese Salad",
      description: "Tomatoes, mozzarella, basil, and balsamic glaze.",
      price: 8.49,
      image: "/h2.jpg",
      category: "Salad",
      availability: true,
    },
    {
      id: 8,
      name: "Grilled Chicken Sandwich",
      description: "Juicy grilled chicken with lettuce, tomato, and mayo.",
      price: 7.99,
      image: "/h3.jpg",
      category: "Sandwich",
      availability: true,
    },
    {
      id: 9,
      name: "BLT Sandwich",
      description: "Bacon, lettuce, tomato, and mayo on toasted bread.",
      price: 8.49,
      image: "/h4.jpg",
      category: "Sandwich",
      availability: true,
    },
    {
      id: 10,
      name: "Turkey Club Sandwich",
      description: "Stacked with turkey, bacon, lettuce, tomato, and mayo.",
      price: 8.99,
      image: "/h5.jpg",
      category: "Sandwich",
      availability: true,
    },
    {
      id: 11,
      name: "Cheeseburger",
      description: "Beef patty with melted cheese, lettuce, tomato, and onions.",
      price: 8.49,
      image: "/h1.jpg",
      category: "Burger",
      availability: true,
    },
    {
      id: 12,
      name: "Double Cheeseburger",
      description: "Two beef patties with double cheese and toppings.",
      price: 10.99,
      image: "/h2.jpg",
      category: "Burger",
      availability: true,
    },
    {
      id: 13,
      name: "Veggie Burger",
      description: "Plant-based patty with fresh lettuce, tomato, and onions.",
      price: 9.49,
      image: "/h3.jpg",
      category: "Burger",
      availability: true,
    },
    {
      id: 14,
      name: "Vegetable Stir-Fry",
      description: "Mixed vegetables sautéed in a flavorful soy sauce.",
      price: 9.49,
      image: "/h4.jpg",
      category: "Vegetarian",
      availability: true,
    },
    {
      id: 15,
      name: "Tofu Teriyaki Bowl",
      description: "Tofu and vegetables in a sweet teriyaki sauce over rice.",
      price: 10.49,
      image: "/h5.jpg",
      category: "Vegetarian",
      availability: true,
    },
    {
      id: 16,
      name: "Spaghetti Bolognese",
      description: "Classic Italian pasta with a rich meat sauce.",
      price: 10.99,
      image: "/h1.jpg",
      category: "Pasta",
      availability: true,
    },
    {
      id: 17,
      name: "Fettuccine Alfredo",
      description: "Creamy Alfredo sauce over tender fettuccine pasta.",
      price: 12.49,
      image: "/h2.jpg",
      category: "Pasta",
      availability: true,
    },
    {
      id: 18,
      name: "Tandoori Chicken",
      description: "Indian-style roasted chicken marinated in spices.",
      price: 12.99,
      image: "/h3.jpg",
      category: "Indian",
      availability: true,
    },
    {
      id: 19,
      name: "Chicken Tikka Masala",
      description: "Creamy tomato curry with tender chicken pieces.",
      price: 13.99,
      image: "/h4.jpg",
      category: "Indian",
      availability: true,
    },
    {
      id: 20,
      name: "Sushi Platter",
      description: "Assorted sushi rolls with fresh fish and vegetables.",
      price: 14.99,
      image: "/h5.jpg",
      category: "Japanese",
      availability: true,
    },
    {
      id: 21,
      name: "Salmon Nigiri",
      description: "Fresh salmon over seasoned rice.",
      price: 9.99,
      image: "/h5.jpg",
      category: "Japanese",
      availability: true,
    },
    {
      id: 22,
      name: "Chocolate Lava Cake",
      description: "Warm chocolate cake with a gooey center.",
      price: 5.99,
      image: "/h1.jpg",
      category: "Dessert",
      availability: true,
    },
    {
      id: 23,
      name: "Cheesecake",
      description: "Creamy cheesecake with a graham cracker crust.",
      price: 6.99,
      image: "/h2.jpg",
      category: "Dessert",
      availability: true,
    },
    {
      id: 24,
      name: "Tiramisu",
      description: "Layered Italian dessert with coffee-soaked ladyfingers.",
      price: 7.49,
      image: "/h3.jpg",
      category: "Dessert",
      availability: true,
    },
  ];
  useEffect(() => {
    // Get unique categories
    setCategory(["All", ...new Set(foods.map((item) => item.category))]);

    // Initially show all foods
    setFilteredFoods(foods);
  }, []);

  

  // Handle category selection
//   const handleCategoryChange = (category) => {
//     setSelectedCategory(category);
//     if (category === "All") {
//       setFilteredFoods(foods);
//     } else {
//       setFilteredFoods(foods.filter((food) => food.category === category));
//     }
//   };
    // Handle category selection
    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        filterFoods(category, selectedPriceRange);
      };
  const handlePriceChange = (priceRange) => {
    setSelectedPriceRange(priceRange);
    filterFoods(selectedCategory, priceRange);
  };

  const filterFoods = (category, priceRange) => {
    let filtered = foods;

    if (category !== "All") {
      filtered = filtered.filter((food) => food.category === category);
    }

    if (priceRange !== "All") {
      const [minPrice, maxPrice] = priceRange.split("-").map(Number);
      filtered = filtered.filter((food) => food.price >= minPrice && food.price <= maxPrice);
    }

    setFilteredFoods(filtered);
  };
  return (
    <div className="bg-[#F8F2E3] dark:bg-[#282828]">
      <Container>
        <div className="flex gap-6 py-[50px] flex-col md:flex-row">
          {/* Sidebar for categories */}
          <aside className="md:w-[320px]  ">
            <div className="bg-white rounded-sm p-4">
              <h2 className="border-b  text-xl text-[#551114] capitalize font-semibold">
                Filter by Categories
              </h2>
              <ul className="flex flex-row md:flex-col flex-wrap gap-3 mt-3">
                {category.map((cat, index) => (
                  <li
                    key={index}
                    className={`p-2 cursor-pointer hover:bg-gray-200 dark:text-[#282828] ${
                      selectedCategory === cat ? "font-bold text-[#551114]" : ""
                    }`}
                    onClick={() => handleCategoryChange(cat)}
                  >
                    {cat}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-sm p-4">
              <h2 className="border-b  text-xl text-[#551114] capitalize font-semibold">Filter by Price</h2>
              <ul className="flex flex-row md:flex-col flex-wrap gap-3 mt-3">
                {["All", "0-10", "10-20", "20-50"].map((range) => (
                  <li key={range} onClick={() => handlePriceChange(range)} className="cursor-pointer p-2 hover:bg-gray-200 dark:text-[#282828]">
                    {range === "All" ? "All Prices" : `$${range.replace("-", " - $")}`}
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Main content */}
          <main className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {filteredFoods.map((food) => (
                <MenuCard1
                  key={food.id}
                  food={food}
                />
              ))}
            </div>
          </main>
        </div>
      </Container>
    </div>
  );
};

export default Menu;
