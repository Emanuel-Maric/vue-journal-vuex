

export default ( ) => ({
  isLoading: true,
  entries: [
    {
      id: new Date().getTime(),//2311321321
      date: new Date().toDateString(), //sat 23, jul
      text: 'Culpa cupidatat excepteur reprehenderit esse irure proident id tempor voluptate nisi cillum fugiat nisi ipsum.',
      picture: null,
    },
    {
      id: new Date().getTime() +100 ,//2311321321
      date: new Date().toDateString(), //sat 23, jul
      text: 'Dolor laboris quis adipisicing labore proident aute laboris tempor.',
      picture: null,
    },
    {
      id: new Date().getTime() +1000,//2311321321
      date: new Date().toDateString(), //sat 23, jul
      text: 'Sunt non quis ullamco exercitation sunt tempor.',
      picture: null,
    },
  ]

})