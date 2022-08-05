const array = [
  { id: 1, link: 'link1' },
  { id: 2, link: 'link2' },
  { id: 3, link: 'link3' },
  { id: 4, link: 'link4' },
  { id: 5, link: 'link5' }
]

const objCreate = (arr) => arr.reduce((acc, currValue) => {
  const { id, link } = currValue;
  return { ...acc, [id]: link }
}, {})

console.log(objCreate(array))