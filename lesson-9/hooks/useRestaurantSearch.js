const useRestaurantSearch = (searchText, allRestaurants) => {
    if (!searchText) {
        return allRestaurants;
      }
      return allRestaurants.filter((restaurant) =>
        restaurant?.data?.name?.toLowerCase().includes(searchText?.toLowerCase())
      );
}

export default useRestaurantSearch;