// Buscar os links salvos
export async function getLinksSave(key){
    const myLinks = await localStorage.getItem(key)

    let linksSaves = JSON.parse(myLinks) || []

    return linksSaves
}

// Salvar um link no local storage
export async function saveLink(key, newLink){
    let linksStored = await getLinksSave(key);

    //Se houver um link salvo com algum ID, não deixar duplicar
    const hasLink = linksStored.some( link => link.id === newLink.id)

    if(hasLink) {
        alert("esse link ja existe na sua lista")
        return //para fazer a função parar
    }

    //adicionar esse novo link na lista
    linksStored.push(newLink) //adicionar na array se
    await localStorage.setItem(key, JSON.stringify(linksStored) ) //set -> adicionar ; usa o JSON.stringfy porque não pode passar uma array como argumento
    alert('Link salvo com sucesso')
}

// Deletar algum link salvo
export function deleteLink(links, id){

    let myLinks = links.filter(item => {
        return (item.id !== id)
    })

    localStorage.setItem('@encurtaLink', JSON.stringify(myLinks)) //atualizando o localstorage
    return myLinks //retorna a array sem o link que foi excluído
}



// retorna todos os id que forem diferente do id que foi clicado
//retorna todos os id menos o que foi clicado

