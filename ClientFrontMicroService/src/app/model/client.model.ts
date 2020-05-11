import {CompteEpargne} from "./compteEpargne.model";

export class Client {

  public code: number;
  public nom: string;
  public prenom: string;
  public email: string;
  public password: string;
  public comptes: CompteEpargne[];
  public sexe: string;
  public tel: string;
  public estSuspendu : boolean;

}

