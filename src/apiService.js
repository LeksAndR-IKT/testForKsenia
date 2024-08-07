const apiService = {
    getCountryByName: async (name) => {
      // имитация API запроса
      const delay = Math.random() * 1000;
      await new Promise((resolve) => setTimeout(resolve, delay));
  
      // пример данных для автокомплита
      return [
        { id: 1, name: "USA", fullName: "United States of America", flag: "🇺🇸" },
        { id: 2, name: "Canada", fullName: "Canada", flag: "🇨🇦" },
        { id: 3, name: "Mexico", fullName: "Mexico", flag: "🇲🇽" },
      ];
    },
  };
  
  export default apiService;