// Importação dos componentes do bootstrap
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"


//Importando o link para transferencia da página
import { Link } from "react-router-dom"

// Importando o hook de produtos
import { useDeletarProduto } from "../../hooks/useProdutos"

const CardProduto = (props) => {

    // importar a função de deletar produto 
    const {deletarProduto} = useDeletarProduto()
      
    //Função pra lidar com o delete
    const handleDelete = async () => {
    if(confirm(`Deseja realmente excluir o produto ${props.nome}?`)){
         const deletado = await deletarProduto(props.id)
         alert(`Produto ${props.nome} deletado com sucesso!`)
    }

    }
  return (
    <div>
        <Card className ="text-center" style={{width:"17rem", height:"35rem"}}>
            {/* Imagem do Card */}
            <Card.Img
            variant="top"
            height="200px"

            //Se tiver uma imagem mostra, se não mostra o link padrão de produto sem imagem
            src={
                props.imagemUrl != null
                ? props.imagemUrl
                : "Link produto sem imagem"
            }
            >

            </Card.Img>
            <Card.Body>
                {/* Titulo do card com o nome do produto */}
                <Card.Title className="mb-3"> {props.nome} </Card.Title>

                {/* Subtitulo com o preço do produto */}
                <Card.Subtitle className="mb-2 text-muted">
                    <b>Preço:</b> {props.precoVenda }
                </Card.Subtitle>
                <Card.Text> <b> Marca: </b> {props.marca}</Card.Text>
                <Card.Text> <b> Tamanho: </b> {props.tamanho}</Card.Text>
                <Card.Text> <b> Categoria: </b> {props.categoria}</Card.Text>
                <Card.Text> <b> Descrição: </b> {props.descricao}</Card.Text>

                {/* Botão de editar produto, passando o id como parametro */}
                <Card.Link as={Link} to= {`/produtos/editar/${props.id}`}>
                    <Button variant="warning"> Editar </Button>
                </Card.Link>


                {/* Botão de excluir */}
                 <Card.Link as={Link} to= {`/produtos/editar/${props.id}`}>
                    <Button variant="danger" onClick={handleDelete}> Excluir </Button>
                </Card.Link>
            </Card.Body>
        </Card>
    </div>
  )
}

export default CardProduto
