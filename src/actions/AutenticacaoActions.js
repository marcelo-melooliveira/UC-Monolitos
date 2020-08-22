

export const dadosPropriedade = (texto) => {
    return {
        type: 'salva_dadosPropriedade',
        payload: texto
    }
}

export const dadosQuestionario = (texto) => {
    return {
        type: 'salva_dadosQuestionatio',
        payload: texto
    }
}


export const dadosdegradacao = (texto) => {
    return {
        type: 'salva_degradacao',
        payload: texto
    }
}


export const dadosrecuperacao = (texto) => {
    return {
        type: 'salva_recuperacao',
        payload: texto
    }
}









