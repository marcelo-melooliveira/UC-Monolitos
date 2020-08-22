import { 
    SALVA_BACIA
} from '../actions/types';


const INITIAL_STATE = {
  
   dados_propriedade: [],
   dados_propriedade2: [],
   dados_questionario:[],
   degradacao:"",
   recuperacao:""
   

}

export default (state = INITIAL_STATE, action) => {
    console.log('dentro do reducer');
    console.log(action.payload);
   

    switch(action.type){
        case 'salva_dadosPropriedade':
        return { ...state, dados_propriedade: action.payload}

        case 'salva_dadosQuestionatio':
        return { ...state, dados_propriedade2: action.payload}

        case 'salva_degradacao':
        return { ...state, degradacao: action.payload}

        case 'salva_recuperacao':
        return { ...state, recuperacao: action.payload}
       

        default:
            return state;
    }
    
        

}