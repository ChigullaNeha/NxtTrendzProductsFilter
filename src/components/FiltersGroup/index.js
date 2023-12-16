import './index.css'

const FiltersGroup = props => {
  const renderCategory = () => {
    const {categoryOptions} = props
    return categoryOptions.map(category => {
      const {updateActiveCategory} = props
      const onClickCategoryItem = () =>
        updateActiveCategory(category.categoryId)
      return (
        <li>
          <button type="button" onClick={onClickCategoryItem}>
            {category.name}
          </button>
        </li>
      )
    })
  }
  const renderRatingsList = () => {
    const {ratingsList} = props
    return ratingsList.map(rating => {
      const {updateActiveRating} = props
      const updateRating = () => updateActiveRating(rating.ratingId)
      return (
        <li>
          <img src={rating.imageUrl} onClick={updateRating} />
        </li>
      )
    })
  }
  return (
    <div className="filters-group-container">
      <h1>Filters Group</h1>
      {renderCategory()}
      {renderRatingsList()}
    </div>
  )
}
export default FiltersGroup
