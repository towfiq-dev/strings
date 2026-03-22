const heroName = [
  {name: 'shakib', age: 45, profession: 'actor'},
  {name: 'Balam', age: 40, profession: 'actor'},
  {name: 'Alom', age: 34, profession: 'singer'},
  {name: 'mobin', age: 42, profession: 'PH'},
  {name: 'rakib', age: 43, profession: 'Houser'},
  {name: 'Rohim', age: 33, profession: 'abc'}
]

const result = heroName.filter((hero)=> {
  return (
    hero.profession === 'actor'
  )
})
console.log(result);
