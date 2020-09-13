import { Produtividade } from './produtividade.model';

export interface HistoricoAno{
    id: number;
    ano: number;
    vendas: Array<Produtividade>;
};
