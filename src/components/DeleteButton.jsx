import proptypes from 'prop-types'

DeleteButton.propTypes = {
    itemName: proptypes.string
  }

export default function DeleteButton({itemName}) {

    const handleDelete = () => {
        if (confirm(`Tem certeza que deseja excluir o ${itemName}`)) {
            alert('Excluido.')
        }
    }
    return (
        <button className="button is-danger is-small"
        onClick={handleDelete}>
            Excluir
        </button>
    )
}