import { Comentario } from './comentario';
export class Poesia {
    uid: string;
    img: string;
    texto: string;
    autor: string;
    comentario?:Comentario[];
}