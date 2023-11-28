import sam from '../../../pages/SamPage'
import url from '../../../fixtures/urlSam.json'
import home from '../../../pages/HomePage'

describe('Acessando e validando Url e Texto de todas as páginas de SAM', () => {

})

it('Valida url e texto na página de usuário', () => {
    sam.beforeSam()
    home.validaURL(url.sam)
        .validaAusenciaMensagensDeErrro()
})