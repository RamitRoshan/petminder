function FilterBar({ pets, categories, selectedPet, setSelectedPet, selectedCategory, setSelectedCategory }) {
  return (
    <div className="flex gap-4 mb-4">
      <select
        value={selectedPet}
        onChange={(e) => setSelectedPet(e.target.value)}
        className="p-2 border rounded w-1/2"
      >
        <option value="">All Pets</option>
        {pets.map((pet) => (
          <option key={pet} value={pet}>{pet}</option>
        ))}
      </select>

      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="p-2 border rounded w-1/2"
      >
        <option value="">All Categories</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>
    </div>
  );
}

export default FilterBar;
