export const groupBy = (arr, key) => {
  return arr.reduce(function(rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};


const categoryNames = {'bun':'Булки','sauce': 'Соусы','main': 'Начинки'}

export const getCategoryName = type =>{
  const name = categoryNames[type];

  return name ? name : "undefined";
}
