import React from "react";
import "./Categories.css";
import { Link } from "react-router-dom";

const categories = [
  // Fresh
  <Link to="/fruitsandvegitablesmain">Vegetables & Fruits</Link>,
  "Fresh Flowers & Leaves",

  // Dairy & Breakfast
  "Dairy, Bread & Eggs",
  "Milk & Milk Products",
  "Paneer, Curd & Cream",
  "Butter & Cheese",

  // Snacks & Drinks
  "Cold Drinks & Juices",
  "Snacks & Munchies",
  "Chips & Namkeens",
  "Ice Creams & Desserts",

  // Food Essentials
  "Atta, Rice & Dal",
  "Cooking Oil & Ghee",
  "Masala, Spices & More",
  "Salt, Sugar & Jaggery",

  // Ready to Eat
  "Breakfast & Instant Food",
  "Noodles & Pasta",
  "Ready-to-Cook Meals",
  "Frozen Food",

  // Beverages
  "Tea, Coffee & Health Drinks",
  "Energy & Soft Drinks",

  // Bakery
  "Bakery & Biscuits",
  "Breads & Buns",
  "Cakes & Pastries",

  // Sauces & Spreads
  "Sauces & Ketchup",
  "Jams, Honey & Spreads",
  "Pickles & Chutneys",

  // Non-Veg
  "Chicken, Meat & Fish",
  "Frozen Meat & Seafood",

  // Health & Wellness
  "Organic & Healthy Living",
  "Dry Fruits & Nuts",
  "Nutrition & Supplements",
  "Pharma & Wellness",

  // Baby & Pet
  "Baby Care",
  "Baby Food & Diapers",
  "Pet Care",
  "Pet Food & Accessories",

  // Household
  "Cleaning Essentials",
  "Laundry & Dishwash",
  "Home & Kitchen",
  "Home & Office",

  // Personal Care
  "Personal Care",
  "Skin Care",
  "Hair Care",
  "Oral Care",
  "Men’s Grooming",
  "Women’s Hygiene",

  // Misc
  "Stationery & Office Supplies",
  "Electricals & Accessories",
  "Paan Corner",
  "Tobacco & Smoking Accessories"
];

const Categories = () => {
  return (
    <section className="categories-section">
      <h2>Shop by Category</h2>

      <div className="categories-grid">
        {categories.map((item, index) => (
          <div key={index} className="category-card">
            {item}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
