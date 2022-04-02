const SelectElement = () => {
  const select = document.createElement('select')
  select.classList.add('template__names')
  select.name = 'selectTemplate'
  select.setAttribute('id', 'selectTemplate')

  return select
}

export default SelectElement;
